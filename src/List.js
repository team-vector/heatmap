import React from 'react';
import { useFirestore } from './connectFirestore';
import { procedureCollection } from './services/firebase';

export default function List() {
  const procedureCollectionList = useFirestore(procedureCollection.orderBy('name', 'desc'), [])
  const list = procedureCollectionList.map(doc => {
    return <li key={doc.id} id={doc.id} name={doc.name}>{doc.name}</li>
  })
  
  return (
    <>
      <h1>List component</h1>
      <ul>
        {list}
      </ul>
    </>
  );
}
