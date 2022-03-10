import Collections from './Collections';
import User from './User';
import Photo from './Photo';
import Tags from '../Tags';

// Patrón de diseño: Stateless
const PhotoComponent = ({ data }) => (
  <>
    {data.id && (
      <>
        <User id={data.id} user={data.user} />
        <Photo
          imageHeight={data.height}
          imageWidth={data.width}
          user={data.user}
          urls={data.urls}
          hash={data.blur_hash}
          color={data.color}
        />
        <Tags tags={data.tags} />
        <Collections relatedCollections={data.related_collections} />
      </>
    )}
  </>
);

export default PhotoComponent;
