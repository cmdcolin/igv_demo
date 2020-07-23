const readline = require('readline')
//const fileStream = fs.createReadStream('input.txt');

const rl = readline.createInterface({
  input: process.stdin, //or fileStream
})

;(async () => {
  let graph = { nodes: [], links: [] }
  for await (const line of rl) {
    if (line.startsWith('S')) {
      const [, name, sequence, ...rest] = line.split('\t')
      let tags = {}
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
      const [, source, strand1, target, strand2, cigar, ...rest] = line.split(
        '\t',
      )
      let tags = {}
      for (let i = 0; i < rest.length; i++) {
        const [name, type, val] = rest[i].split(':')
        if (type === 'i') {
          tags[name] = +val
        } else if (type === 'Z') {
          tags[name] = val
        }
      }
      graph.links.push({ source, target, strand1, strand2, cigar, tags })
    }
  }
  console.log(JSON.stringify(graph, null, 2))
})()