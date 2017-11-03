import { toHumanReadableBytes } from "../chartHelpers";

export const processCpuLoad = {
  query: `call dbms.queryJmx('java.lang:type=OperatingSystem') yield attributes
          return attributes.ProcessCpuLoad.value * 100 as value`,
  title: "CPU Load (%)",
  yLabel: "CPU %",
  resultFormatter: i => i.toFixed(2),
  chartType: "area"
};
export const systemMemory = {
  query: `call dbms.queryJmx('java.lang:type=OperatingSystem') yield attributes
          return (attributes.TotalPhysicalMemorySize.value - attributes.FreePhysicalMemorySize.value) * 100 as Used,
          attributes.FreePhysicalMemorySize.value * 100 as Available`,
  title: "System Memory",
  headings: ["Used", "Available"]
};
export const totalStoreSize = {
  query: `call dbms.queryJmx("org.neo4j:instance=kernel#0,name=Store file sizes") yield attributes
          return attributes.TotalStoreSize.value as value`,
  title: "Total Store Size",
  resultFormatter: i => toHumanReadableBytes(i)
};
