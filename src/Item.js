import React from 'react';

export default function Item({ itemObj }) {
  const { id, name } = itemObj;
  return (
    <>
      <p>{id}</p>
      <p>{name}</p>
    </>
  )
}
