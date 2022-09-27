import { async } from '@firebase/util'
import { addDoc, collection, doc, DocumentReference, DocumentSnapshot, onSnapshot, Query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../firebase'
import { LinkForm } from './LinkForm'

export type linkObj = {
  url: string,
  description: string,
  name: string
};

export const Links = () => {

  const [links, setLinks] = useState<linkObj[]>([]);

  const onSubmit = async (link: linkObj) => {
    try {
      const docRef: DocumentReference = await addDoc(collection(db, 'link'), link);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const link = onSnapshot(collection(db, 'link'), (docs) => {
    docs.forEach((doc) => {
      // setLinks([...links, doc.data() as linkObj]);
      console.log(doc.data());
    });
  });

  return (

    <>
      <LinkForm saveLink={onSubmit} />
      <h1>Links!</h1>
      {/* {
        links.map(link => {
          console.log(link.name);
        })
      } */}
    </>
  )
}