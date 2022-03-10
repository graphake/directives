// TODO: ES6 import
const fs = require('fs')
const graphql = require('graphql')

describe('readme', () => {
  it('contains valid graphql syntax', () => {
    const content = fs.readFileSync('./README.md')
      .toString()
      .split(/```/)
      .filter(s => s.startsWith("gql"))
      .map(s => s.replace("gql", ""))

    content.forEach(gql => {
      expect(() => {
        graphql.parse(gql)
      }).not.toThrowError()
    });
  })
})