import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from "../firebase/config";

interface FirebaseStorageError {
  serverResponse: string | null;
}

interface iSnapshot {
  bytesTransferred: number;
  totalBytes: number;
}

const useStorage = (photo: File) => {
  const [progress, setProgress] = useState<number>(0);
  const [error, setError] = useState<FirebaseStorageError | null>(null);
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    const storageRef = projectStorage.ref(`${Date.now()}_${photo.name}`);
    const collectionRef = projectFirestore.collection('images');

    storageRef.put(photo).on('state_changed', (snapshot: iSnapshot) => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(percentage);
    }, (error) => {
      setError(error);
    }, async () => {
      const url = await storageRef.getDownloadURL();
      collectionRef.add({ url, createdAt: timestamp() })
      setUrl(url);
    });
  }, [photo]);

  return { progress, url, error };
}

export default useStorage;