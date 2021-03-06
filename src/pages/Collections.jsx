import { useContext } from 'react';
import { CollectionsContext } from '../contexts/CollectionsContext';

import Loading from '../components/Loading';
import SEO from '../components/SEO';
import Message from '../components/Message';
import Collections from '../components/Collections';
import Search from '../components/Search';
import LoadMore from '../components/LoadMore';

import ErrorBoundary from '../components/ErrorBoundary';

// Patrón de diseño: Render props
const CollectionsPage = () => {
  const { collections, error, getLoadMore, loading } =
    useContext(CollectionsContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <ErrorBoundary>
      <SEO title="Colecciones" />
      <Search type="collections" />
      {error ? (
        <Message title={error} />
      ) : (
        <>
          <Collections collections={collections} />
          <LoadMore handleClick={getLoadMore} />
        </>
      )}
    </ErrorBoundary>
  );
};

export default CollectionsPage;
