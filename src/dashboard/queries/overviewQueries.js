export const labelDistribution = {
  query: `MATCH (n) RETURN DISTINCT count(labels(n)) as value, labels(n) as key`,
  title: 'Label distribution'
}
