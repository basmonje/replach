import { useContext } from 'react';
import { PhotoContext } from '../contexts/PhotoContext';

import Loading from '../components/Loading';
import Message from '../components/Message';
import Photo from '../components/Photo';
import SEO from '../components/SEO';

import ErrorBoundary from '../components/ErrorBoundary';

// Patrón de diseño: Render props
const PhotoPage = () => {
  const { error, loading, data } = useContext(PhotoContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <ErrorBoundary>
      <SEO title={`Foto de ${data.user?.username}` || ''} />
      {error ? <Message title={error} /> : <Photo data={data} />}
    </ErrorBoundary>
  );
};

export default PhotoPage;
