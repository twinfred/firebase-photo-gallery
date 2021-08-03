import React, { useState } from 'react';
import './UploadForm.scss';

enum PhotoTypes {
  'image/png',
  'image/gif',
  'image/jpeg'
}

const UploadForm = (): React.ReactElement => {
  const [photo, setPhoto] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fileUploadHandler = (event: any): void => {
    const file: File = event.target.files[0];

    setError(null);

    if (file && file.type in PhotoTypes) {
      setPhoto(file);
    } else {
      setPhoto(null);
      setError('Error: Please upload an image file (png, gif or jpeg)');
    }
  };

  return (
    <form className="image-form">
      <label htmlFor="FileUpload" className="sr-only" aria-labelledby="FileUploadError">Upload an image</label>
      <input id="FileUpload" type="file" accept="image/png, image/gif, image/jpeg" onChange={fileUploadHandler} />
      {error && <p id="FileUploadError" className="error" role="alert" aria-live="polite">{error}</p>}
      {photo && photo.name && <p>{photo.name}</p>}
    </form>
  )
};

export default UploadForm;