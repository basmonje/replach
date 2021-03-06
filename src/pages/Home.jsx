import { useContext } from 'react';
import { PhotosContext } from '../contexts/PhotosContext';

import Loading from '../components/Loading';
import SEO from '../components/SEO';
import Message from '../components/Message';
import Gallery from '../components/Gallery';
import Search from '../components/Search';
import LoadMore from '../components/LoadMore';

import ErrorBoundary from '../components/ErrorBoundary';

// Patrón de diseño: Render props
const Home = () => {
  const { photos, loading, error, getLoadMore } = useContext(PhotosContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <ErrorBoundary>
      <SEO title="Cientos de imagenes gratuitas" />
      <Search type="photos" />
      {error ? (
        <Message title={error} />
      ) : (
        <>
          <Gallery photos={photos} />
          <LoadMore handleClick={getLoadMore} />
        </>
      )}
    </ErrorBoundary>
  );
};

export default Home;
