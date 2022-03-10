import { useState, createContext, useEffect } from 'react';
import { searchCollections } from '../services/collections';

import withRouter from '../utils/withRouter';

const initialData = {
  collections: [],
  loading: false,
  error: null,
  page: 1,
  totalCount: 0,
  query: undefined
};

export const SearchCollectionsContext = createContext(initialData);

// Patrón de diseño: Provider
const SearchCollectionsProvider = ({ router, children }) => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  useEffect(() => {
    searchCollectionsByQuery(
      router.params.query,
      parseInt(router.query.get('page')) || 1
    );
  }, [router.params.query, router.query.get('page')]);

  const searchCollectionsByQuery = (query, page) => {
    if (query !== '') {
      setPage(page);
      setQuery(query);
      setLoading(true);
      searchCollections(query, page)
        .then((data) => {
          if (data.total === 0) {
            setError(`No existe: ${query}`);
            setCollections([]);
          } else {
            if (error) setError(null);

            setCollections(data.results);
            setTotalCount(data.total);
          }
        })
        .catch(() => setError('Ha ocurrido un error'))
        .finally(() => setLoading(false));
    }
  };

  return (
    <SearchCollectionsContext.Provider
      value={{ collections, loading, error, totalCount, page, query }}
    >
      {children}
    </SearchCollectionsContext.Provider>
  );
};

export default withRouter(SearchCollectionsProvider);
