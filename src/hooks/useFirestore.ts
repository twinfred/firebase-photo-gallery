import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection: string) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore.collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapshot) => {
        let documents: any = [];

        snapshot.forEach(document => {
          documents.push({ ...document.data(), id: document.id })
        });

        setDocs(documents);
      });

    return () => unsub();
  }, [collection])

  return { docs };
}

export default useFirestore;