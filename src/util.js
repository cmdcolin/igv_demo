// simple handcoded GFA parser
export function parseGFA(file) {
  const graph = { nodes: [], links: [], paths: [] }
  for (const line of file.split('\n')) {
    if (line.startsWith('S')) {
      const [, name, sequence, ...rest] = line.split('\t')
      const tags = {}
      for (let i = 0; i < rest.length; i++) {
        const [name, type, val] = rest[i].split(':')
        if (type === 'i') {
          tags[name] = +val
        } else if (type === 'Z') {
          tags[name] = val
        }
      }
      graph.nodes.push({ id: name, sequence, tags })
    } else if (line.startsWith('L')) {
      const [, source, strand1, target, strand2, cigar, ...rest] = line.split('\t')
      const tags = {}
      for (let i = 0; i < rest.length; i++) {
        const [name, type, val] = rest[i].split(':')
        if (type === 'i') {
          tags[name] = +val
        } else if (type === 'Z') {
          tags[name] = val
        }
      }
      graph.links.push({ source, target, strand1, strand2, cigar, tags })
    } else if (line.startsWith('P')) {
      const [, name, path, ...rest] = line.split('\t')

      graph.paths.push({ name, path, rest })
    }
  }
  return graph
}

// adapted from https://observablehq.com/@mbostock/saving-svg
export function serialize(svg) {
  const xmlns = 'http://www.w3.org/2000/xmlns/'
  const xlinkns = 'http://www.w3.org/1999/xlink'
  const svgns = 'http://www.w3.org/2000/svg'

  svg = svg.cloneNode(true)
  const fragment = `${window.location.href}#`
  const walker = document.createTreeWalker(svg, NodeFilter.SHOW_ELEMENT, null, false)
  while (walker.nextNode()) {
    for (const attr of walker.currentNode.attributes) {
      if (attr.value.includes(fragment)) {
        attr.value = attr.value.replace(fragment, '#')
      }
    }
  }
  svg.setAttributeNS(xmlns, 'xmlns', svgns)
  svg.setAttributeNS(xmlns, 'xmlns:xlink', xlinkns)
  const serializer = new window.XMLSerializer()
  const string = serializer.serializeToString(svg)
  return new Blob([string], { type: 'image/svg+xml' })
}

// Given a GFA graph with sequence nodes ('S' tags), it breaks the S tags into
// multiple nodes depending on how long the sequence is, which gives the graph
// an organic look when the layout algorithm is applied
export function reprocessGraph(G, chunkSize) {
  const Gp = { nodes: [], links: [] }

  const seen = {}
  for (let i = 0; i < (G.paths || {}).length; i++) {
    const path = G.paths[i]
    const pathNodes = path.path.split(',')
    for (let j = 0; j < pathNodes.length - 1; j++) {
      const curr = `${pathNodes[j]}_${pathNodes[j + 1]}`
      if (!seen[curr]) {
        seen[curr] = [path.name]
      } else {
        seen[curr].push(path.name)
      }
    }
  }
  for (let i = 0; i < G.nodes.length; i++) {
    const { id, sequence, ...rest } = G.nodes[i]
    const nodes = []
    const length = sequence === '*' ? rest.tags.LN : sequence.length

    // break long sequence into multiple nodes, for organic layout
    nodes.push({ ...rest, id: `${id}-start` })
    for (let i = chunkSize; i < length - chunkSize; i += chunkSize) {
      nodes.push({ ...rest, id: `${id}-${i}` })
    }
    nodes.push({ ...rest, id: `${id}-end` })

    // recreate links
    for (let j = 0; j < nodes.length - 1; j++) {
      const source = nodes[j].id
      const target = nodes[j + 1].id
      Gp.links.push({
        ...rest,
        source,
        target,
        id,
        length,
        sequence,
        linkNum: i,
      })
    }
    Gp.nodes = Gp.nodes.concat(nodes)
  }
  for (let i = 0; i < G.links.length; i++) {
    const { strand1, strand2, source, target, ...rest } = G.links[i]
    const paths = seen[`${source}${strand1}_${target}${strand2}`] || []
    const loop = source === target

    // enumerates cases for which end of source connects to
    // which end of the target
    const link = {
      source: `${source}-${strand1 === '+' ? 'end' : 'start'}`,
      target: `${target}-${strand2 === '+' ? 'start' : 'end'}`,
      ...rest,
    }
    if (loop) {
      link.loop = true
    }
    if (paths.length) {
      link.paths = paths
    }
    Gp.links.push(link)
  }
  return Gp
}

export function* generatePaths(links, graph) {
  let currentLinkId = links[0].linkNum
  let currentLinkSet = []
  let original
  for (let i = 0; i < links.length; i++) {
    const link = links[i]
    if (currentLinkId !== link.linkNum) {
      if (original.id) {
        yield { links: currentLinkSet, original }
      }
      currentLinkSet = []
      currentLinkId = link.linkNum
    }
    original = graph[i]
    currentLinkSet.push([link.source.x, link.source.y])
    currentLinkSet.push([link.target.x, link.target.y])
  }
}

export function* generateEdges(links, graph) {
  for (let i = 0; i < links.length; i++) {
    const link = links[i]
    const original = graph[i]
    if (!original.id) {
      yield {
        links: [
          [link.source.x, link.source.y],
          [link.target.x, link.target.y],
        ],
        original,
      }
    }
  }
}