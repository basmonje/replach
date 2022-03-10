import { Download } from '@basmonje/lib-icon';
import { Link } from 'react-router-dom';

import Avatar from '../Avatar';

// Patrón de diseño: Stateless
const CardFigcaption = ({ id, user }) => (
  <figcaption className="-bg-black-400">
    <Link to={`/photo/${id}`} className="nav-photo"></Link>
    <div className="-flex -content-between -items-center -flex-column -px-6 -px-md-3 -my-2">
      <a href={user.links.html} target="_blank" className="-color-white">
        <div className="-flex -items-center -gap-2 -close-span">
          <Avatar
            src={user.profile_image.small}
            alt={`Photo by ${user.username}`}
          />
          <span>{user.username}</span>
        </div>
      </a>
      <a
        href={`https://unsplash.com/photos/${id}/download?force=true`}
        target="_blank"
        className="-flex -color-black-700 -color-hover-black-900 -bg-white-700 -bg-hover-white-900 -p-2 -p-sm-3 -radius-mini"
      >
        <Download strokeWidth={2} />
      </a>
    </div>
  </figcaption>
);

export default CardFigcaption;
