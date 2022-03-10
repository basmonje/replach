import Container from './Container';

const LinkCustom = ({ children, href }) => (
  <a
    href={href}
    target="_blank"
    className="-color-blue-600 -color-hover-blue-300 link"
  >
    {children}
  </a>
);

// Patrón de diseño: Stateless
const Footer = () => (
  <Container as="footer" className="-px-4 -py-9">
    <div className="-flex -flex-col -gap-2">
      <ul className="-flex -items-center -gap-4">
        <li>
          <LinkCustom href="https://github.com/basmonje/replach">
            Github
          </LinkCustom>
        </li>
      </ul>
      <p>Replach © {new Date().getFullYear()}</p>
      <span>
        Powered by{' '}
        <LinkCustom href="https://unsplash.com/developers">Unsplash</LinkCustom>
        , <LinkCustom href="https://es.reactjs.org/">React</LinkCustom> y{' '}
        <LinkCustom href="https://github.com/">Github</LinkCustom>
      </span>
    </div>
  </Container>
);

export default Footer;
