export const labelDistribution = {
  query: `MATCH (n) RETURN DISTINCT count(labels(n)) as value, labels(n) as key`,
  title: 'Label distribution'
}
export const totalNodes = {
  query: `MATCH (n) RETURN count(n) as value`,
  title: 'Total node count'
}
