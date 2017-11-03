export const totalNodes = {
  query: `MATCH (n) RETURN count(n) as value`,
  title: "Total node count",
  chartType: "bar",
  refreshInterval: 2,
  type: "cypher"
};
export const totalRelationships = {
  query: `MATCH ()-[r]-() RETURN count(r) as value`,
  title: "Total relationship count",
  chartType: "area",
  type: "cypher",
  refreshInterval: 2
};
export const staticData = {
  data: [{ x: 1, y: "2" }, { x: 2, y: "4" }],
  title: "Static Data",
  chartType: "line",
  type: "json"
};

export const labelDistribution = {
  query: `MATCH (n) RETURN DISTINCT count(labels(n)) as value, labels(n) as key`,
  title: "Label distribution",
  chartType: "doughnut",
  type: "cypher"
};
