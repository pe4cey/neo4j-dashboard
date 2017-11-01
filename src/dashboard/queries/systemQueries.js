export const processCpuLoad = {
  query: `call dbms.queryJmx('java.lang:type=OperatingSystem') yield attributes
          return attributes.ProcessCpuLoad.value * 100 as value`,
  title: 'CPU Load',
  yLabel: 'CPU %',
  setYAxis: 100
}
export const systemMemory = {
  query: `call dbms.queryJmx('java.lang:type=OperatingSystem') yield attributes
          return (attributes.TotalPhysicalMemorySize.value - attributes.FreePhysicalMemorySize.value) * 100 as Used,
          attributes.FreePhysicalMemorySize.value * 100 as Available`,
  title: 'System Memory',
  headings: ['Used', 'Available']
}
