import React from 'react';

export default function Procedure({value, onChange}) {
  return (
    <>
      <label className={'procedure'}>Procedure: </label>
      <input type="text" name="procedureTerm" value={value} onChange={onChange} />
    </>
  )
}