import { useState, createContext, useEffect } from 'react';
import { getPhotos } from '../services/photos';

const initialState = {
  photos: [],
  loading: false,
  error: null,
  getLoadMore: () => null
};

export const PhotosContext = createContext(initialState);

// Patrón de diseño: Provider
const PhotosProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => getPhotosAPI(), []);

  const getPhotosAPI = () => {
    setLoading(true);
    getPhotos()
      .then((data) => {
        if (data) {
          setPhotos(data);
        } else {
          setError('Ha ocurrido un error :(');
        }
      })
      .catch(() => setError('Ha ocurrido un error'))
      .finally(() => setLoading(false));
  };

  const getLoadMore = () => {
    getPhotos(12)
      .then((data) => {
        if (data) {
          setPhotos((photos) => {
            return [...photos, ...data];
          });
        }
      })
      .catch(() => setError('Ha ocurrido un error'));
  };

  return (
    <PhotosContext.Provider value={{ photos, loading, error, getLoadMore }}>
      {children}
    </PhotosContext.Provider>
  );
};

export default PhotosProvider;
