import { useContext } from 'react';
import { CollectionContext } from '../contexts/CollectionContext';

import Loading from '../components/Loading';
import Message from '../components/Message';
import Collection from '../components/Collection';
import Pagination from '../components/Pagination';
import SEO from '../components/SEO';

import ErrorBoundary from '../components/ErrorBoundary';

// Patrón de diseño: Render props
const CollectionPage = () => {
  const { error, loading, collection } = useContext(CollectionContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <ErrorBoundary>
      {error ? (
        <Message title={error} />
      ) : (
        <>
          <SEO title={collection.summary?.title || ''} />
          <Collection data={collection.summary} photos={collection.photos} />
          {collection.summary.total_photos && collection.page && (
            <Pagination
              currentPage={collection.page}
              pageSize={18}
              totalCount={collection.summary.total_photos}
            />
          )}
        </>
      )}
    </ErrorBoundary>
  );
};

export default CollectionPage;
