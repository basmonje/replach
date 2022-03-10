import { useState, createContext, useEffect } from 'react';
import { getCollections } from '../services/collections';

const initialState = {
  collections: [],
  loading: false,
  error: null,
  getLoadMore: () => {}
};

export const CollectionsContext = createContext(initialState);

// Patrón de diseño: Provider
const CollectionsProvider = ({ children }) => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(2);

  useEffect(() => getCollectionsAPI(), []);

  const getCollectionsAPI = () => {
    setLoading(true);
    getCollections(1)
      .then((data) => {
        if (data) {
          setCollections(data);
        } else {
          setError('Ha ocurrido un error :(');
        }
      })
      .catch((error) => setError(`Ha ocurrido un error: ${error.message}`))
      .finally(() => setLoading(false));
  };

  const getLoadMore = () => {
    getCollections(page)
      .then((data) => {
        if (data.errors) {
          setError('Ha ocurrido un error');
        } else {
          if (error) setError(null);
          setCollections((acc) => {
            return [...acc, ...data];
          });
          setPage(page + 1);
        }
      })
      .catch((error) => setError(`Ha ocurrido un error: ${error.message}`));
  };

  return (
    <CollectionsContext.Provider
      value={{ collections, loading, error, getLoadMore }}
    >
      {children}
    </CollectionsContext.Provider>
  );
};

export default CollectionsProvider;
