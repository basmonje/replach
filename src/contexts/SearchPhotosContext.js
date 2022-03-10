import { useState, createContext, useEffect } from 'react';
import { searchPhotos } from '../services/photos';

import withRouter from '../utils/withRouter';

const initialState = {
  photos: [],
  loading: false,
  error: null,
  totalCount: 0,
  page: 1
};

export const SearchPhotosContext = createContext(initialState);

// Patrón de diseño: Provider
const SearchPhotosProvider = ({ router, children }) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  useEffect(
    () =>
      searchPhotoByQuery(
        router.params.query,
        parseInt(router.query.get('page')) || 1
      ),
    [router.params.query, router.query.get('page')]
  );

  const searchPhotoByQuery = (query, page) => {
    if (query !== '') {
      setPage(page);
      setQuery(query);
      setLoading(true);
      searchPhotos(query, page)
        .then((data) => {
          if (data.total === 0) {
            setError(`No existe: ${query}`);
          } else {
            if (error) setError(null);

            setPhotos(data.results);
            setTotalCount(data.total);
          }
        })
        .catch(() => setError('Ha ocurrido un error'))
        .finally(() => setLoading(false));
    }
  };

  return (
    <SearchPhotosContext.Provider
      value={{ photos, loading, error, totalCount, page, query }}
    >
      {children}
    </SearchPhotosContext.Provider>
  );
};

export default withRouter(SearchPhotosProvider);
