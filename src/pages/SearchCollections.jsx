import { useContext } from 'react';
import { SearchCollectionsContext } from '../contexts/SearchCollectionsContext';

import Loading from '../components/Loading';
import Collections from '../components/Collections';
import SEO from '../components/SEO';
import Pagination from '../components/Pagination';
import Search from '../components/Search';
import Message from '../components/Message';

// Patrón de diseño: Render props
const SearchCollections = () => {
  const { error, collections, loading, query, page, totalCount } = useContext(
    SearchCollectionsContext
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <SEO title={`Buscando: ${query}`} />
      <Search type="collections" />
      {error ? (
        <Message title={error} />
      ) : (
        <>
          <Collections collections={collections} />
          <Pagination
            currentPage={page}
            pageSize={18}
            totalCount={totalCount}
          />
        </>
      )}
    </>
  );
};

export default SearchCollections;
