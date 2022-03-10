import { useContext } from 'react';
import { SearchPhotosContext } from '../contexts/SearchPhotosContext';

import Loading from '../components/Loading';
import Gallery from '../components/Gallery';
import SEO from '../components/SEO';
import Pagination from '../components/Pagination';
import Search from '../components/Search';
import Message from '../components/Message';

import ErrorBoundary from '../components/ErrorBoundary';

// Patrón de diseño: Render props
const SearchPhotos = () => {
  const { error, loading, page, photos, totalCount, query } =
    useContext(SearchPhotosContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <ErrorBoundary>
      <SEO title={`Buscando: ${query}`} />
      <Search type="photos" />
      {error ? (
        <Message title={error} />
      ) : (
        <>
          <Gallery photos={photos} />
          <Pagination
            currentPage={page}
            pageSize={18}
            totalCount={totalCount}
          />
        </>
      )}
    </ErrorBoundary>
  );
};

export default SearchPhotos;
