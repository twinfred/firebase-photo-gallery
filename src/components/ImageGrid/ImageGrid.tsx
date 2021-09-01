import { useState } from 'react';
import useFirestore from '../../hooks/useFirestore';
import './ImageGrid.scss';

interface iImage {
  createdAt: {
    nanoseconds: number;
    seconds: number;
  };
  url: string;
  id: string;
}

interface iImages {
  docs: Array<iImage>
}

const ImageGrid = () => {
  const { docs }: iImages = useFirestore('images');
  console.log(docs);

  return (
    <div className="image-grid">
      {
        docs.map(doc => <img key={doc.id} src={doc.url} alt="" height="250px" />)
      }
    </div>
  )
}

export default ImageGrid