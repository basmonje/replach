import { useState, createContext, useEffect } from 'react';
import { getPhotoById } from '../services/photos';

import withRoute from '../utils/withRouter';

const initialState = {
  data: {},
  loading: false,
  error: null
};

export const PhotoContext = createContext(initialState);

// Patrón de diseño: Provider
const PhotoProvider = ({ router, children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => fetchData(router.params.id), [router.params.id]);

  const fetchData = (id) => {
    setLoading(true);
    getPhotoById(id)
      .then((photo) => {
        if (photo.errors) {
          setError('Foto no encontrada');
        } else {
          if (error) setError(null);
          setData(photo);
        }
      })
      .catch(() => setError('Ha ocurrido un error'))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <PhotoContext.Provider value={{ data, loading, error }}>
      {children}
    </PhotoContext.Provider>
  );
};

export default withRoute(PhotoProvider);
