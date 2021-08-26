import React, { useEffect } from 'react';
import useStorage from '../../hooks/useStorage';
import './ProgressBar.scss';

interface iProgressBar {
  photo: File;
  setPhoto: React.Dispatch<React.SetStateAction<File | null>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

const ProgressBar = ({ photo, setPhoto, setError }: iProgressBar) => {
  const { url, progress, error } = useStorage(photo);

  useEffect(() => {
    if (url) {
      setPhoto(null);
    }
  }, [url, setPhoto]);

  useEffect(() => {
    if (error) {
      setError('Uh oh! A database error has occured. Please try again.');
    }
  }, [error, setError]);

  return (
    <div className="progress-bar" style={{ width: progress + '%' }}></div>
  )
}

export default ProgressBar;