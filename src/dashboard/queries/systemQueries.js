export const processCpuLoad = {
  query: `call dbms.queryJmx('java.lang:type=OperatingSystem') yield attributes
          return attributes.ProcessCpuLoad.value as value`,
  title: 'CPU Load',
  yLabel: 'CPU %'
}
export const systemMemory = {
  query: `call dbms.queryJmx('java.lang:type=OperatingSystem') yield attributes
          return attributes.TotalPhysicalMemorySize.value - attributes.FreePhysicalMemorySize.value as Used,
          attributes.FreePhysicalMemorySize.value as Available`,
  title: 'System Memory',
  headings: ['Used', 'Available']
}
