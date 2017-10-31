import React from 'react';

import { scaleOrdinal } from '@vx/scale';
import { LegendOrdinal } from '@vx/legend';
import { chartTheme } from '@data-ui/theme';
import { RadialChart, ArcSeries, ArcLabel } from '@data-ui/radial-chart';


export default ({
  data = [],
  width = 500,
  height = 500,
  margin = { top: 10, right: 10, bottom: 10, left: 10 },
}) => {
  const filteredList = data.filter(i => i !== undefined)
  if (filteredList.length === 0) {
    return null
  }
  const total = filteredList.reduce((acc, value) => acc.value + value.value);
  const colorScale = scaleOrdinal({ range: chartTheme.colors.categories });
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <RadialChart
        ariaLabel="This is a radial-chart chart of..."
        width={width}
        height={height}
        margin={margin}
        renderTooltip={({ event, datum, data, fraction }) => (
          <div>
            <strong>{datum.label}</strong> ({datum.value})
          </div>
        )}
      >
        <ArcSeries
          data={data}
          pieValue={d => d.value}
          fill={arc => colorScale(arc.data.label)}
          stroke="#fff"
          strokeWidth={1}
          label={arc => `${(arc.data.value / total * 100).toFixed(1)}%`}
          labelComponent={<ArcLabel />}
          innerRadius={radius => 0.35 * radius}
          outerRadius={radius => 0.6 * radius}
          labelRadius={radius => 0.75 * radius}
        />
      </RadialChart>
      <LegendOrdinal
        direction="column"
        scale={colorScale}
        shape="rect"
        fill={({ datum }) => colorScale(datum)}
        labelFormat={label => label}
      />
  </div>
  )
};
