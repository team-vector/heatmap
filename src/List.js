import React from 'react';
import { useFirestore } from './connectFirestore';
import {
  // procedureCollection,
  hospitalCollection,
  resultsCollection
} from './services/firebase';
import Item from './Item';

export default function List({ items }) {
  // const procedureCollectionList = useFirestore(hospitalCollection.orderBy('name', 'desc'), [])
  // const list = procedureCollectionList && procedureCollectionList.map(doc => {
  //   console.log(doc.latitude, doc.longitude)
  //   return <li key={doc.id} >{doc.latitude} {doc.longitude}</li>
  // })
  
  // return (
  //   <>
  //     <h1>List component</h1>
  //     <ul>
  //       {list}
  //     </ul>
  //   </>
  // );
  const itemsThings = useFirestore(hospitalCollection.orderBy('name', 'desc'), [])
  const itemsList = itemsThings && itemsThings.map(doc => {
    // console.log(doc)
    return (
      <Item
        itemObj={doc} 
        key={doc.id} 
      />
    )
  })
  return (
    <>
        {/* {itemsList === null && <h1>Loading...</h1>} */}
      <div>
        {/* {itemsList} */}
      </div>
      {/* <iframe src="https://www.google.com/maps/d/u/4/embed?mid=18D4qtSCHU8-Vkscaj7Coj9ozPuDvsJzQ" width="640" height="480"></iframe> */}
      {/* <iframe src="https://www.google.com/maps/d/u/4/embed?mid=1MBsh4QJLI_E164D4ZrkLWh9C0YEwV7UF" width="640" height="480"></iframe> */}
    </>
  )
}
