import React from 'react';

export default function ZipCode({value, onChange}) {
  return (
    <>
      <label className={'zip'}>Zip: </label>
      <input type='text' name='zipTerm' value={value} onChange={onChange} />
    </>
  )
}