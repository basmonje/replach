import Avatar from '../Avatar';
import Container from '../Container';

// Patrón de diseño: Stateless
const User = ({ user, total }) => (
  <Container as="section">
    <div className="-flex -items-center -content-between -mt-3">
      <a
        href={user.links.html}
        target="_blank"
        className="-flex -gap-2 -flex-row -items-center -my-5 -color-white"
      >
        <Avatar
          src={user.profile_image.small}
          alt={`Photo by ${user.username}`}
        />
        <p>{user.username}</p>
      </a>
      <span>{total} Fotos</span>
    </div>
  </Container>
);

export default User;
