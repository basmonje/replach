import { useState, createContext, useEffect } from 'react';

import {
  getCollectionPhotosById,
  getCollectionById
} from '../services/collections';

import withRouter from '../utils/withRouter';

const initialState = {
  collection: {},
  loading: false,
  error: null
};

export const CollectionContext = createContext(initialState);

// Patrón de diseño: Provider
const PhotoProvider = ({ router, children }) => {
  const [collection, setCollection] = useState({
    summary: {},
    photos: [],
    page: 1
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const dataSummary = await getCollectionById(router.params.id);
        const dataPhotos = await getCollectionPhotosById(
          router.params.id,
          parseInt(router.query.get('page')) || 1
        );

        if (dataSummary && dataPhotos) {
          setCollection({
            summary: dataSummary,
            photos: dataPhotos,
            page: parseInt(router.query.get('page')) || 1
          });
        } else {
          setError('Sin contenido');
        }
      } catch (error) {
        setError('Ha ocurrido un error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router.params.id, router.query.get('page')]);

  return (
    <CollectionContext.Provider value={{ loading, error, collection }}>
      {children}
    </CollectionContext.Provider>
  );
};

export default withRouter(PhotoProvider);
