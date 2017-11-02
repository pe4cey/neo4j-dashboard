export const totalNodes = {
  query: `MATCH (n) RETURN count(n) as value`,
  title: 'Total node count',
  chartType: 'text',
  refreshInterval: 10,
  type: 'cypher'
}
export const totalRelationships = {
  query: `MATCH ()-[r]-() RETURN count(r) as value`,
  title: 'Total relationship count',
  chartType: 'area',
  type:'cypher',
  refreshInterval: 2
}
export const labelDistribution = {
  query: `MATCH (n) RETURN DISTINCT count(labels(n)) as value, labels(n) as key`,
  title: 'Label distribution',
  chartType: 'pie',
  type: 'cypher'
}
export const staticData = {
  data: [{x: 1, y: '2'}, {x: 2, y: '4'}],
  title: 'Static Data',
  chartType: 'area',
  type: 'json'
}
