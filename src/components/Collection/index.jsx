import Tags from '../Tags';
import User from './User';
import Title from './Header';
import Gallery from '../Gallery';

// Patrón de diseño: Stateless
const Collection = ({ data, photos }) => (
  <>
    {photos.length !== 0 && data.title && (
      <>
        <Title title={data.title} description={data.description} />
        <Tags tags={data.tags} />
        <User user={data.user} total={data.total_photos} />
        <Gallery photos={photos} />
      </>
    )}
  </>
);

export default Collection;
