import { Link, useLocation } from 'react-router-dom';
import Container from '../components/Container';

const LinkCustom = ({ children, active, href, weight = 3 }) => (
  <Link
    to={href}
    className={`-text-w-${weight} ${
      active ? '-color-white' : '-color-white-700 -color-hover-white'
    }`}
  >
    {children}
  </Link>
);

// Patrón de diseño: Statefull
const Navbar = ({ list }) => {
  const { pathname } = useLocation();
  return (
    <Container as="header" className="-px-3 -py-8 -overflow-hidden bg-navbar">
      <nav className="-flex -items-center -content-between">
        <div>
          <LinkCustom href="/" active={pathname === '/'} weight={7}>
            REPLACH
          </LinkCustom>
        </div>
        <ul className="-flex -items-center -gap-3">
          <li>
            <LinkCustom
              href="/collections"
              active={pathname === '/collections'}
              weight={5}
            >
              Colecciones
            </LinkCustom>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
