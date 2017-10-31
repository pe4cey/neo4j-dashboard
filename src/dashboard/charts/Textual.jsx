import React from 'react';
export default ({data = []}) => {
  const d = (data.length !== 0) ? data[data.length - 1] : data
  return (
    <div>
      {d.y}
    </div>
  )
}
