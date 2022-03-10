import Container from '../Container';

// Patrón de diseño: Stateless
const Header = ({ title, description }) => (
  <Container>
    <header className="-flex -flex-col -gap-2">
      <div className="-mt-6 -flex -gap-2 -flex-col">
        <h1 className="-m-0 -text-massive">
          {title && title.charAt().toUpperCase()}
          {title && title.toLowerCase().slice(1)}
        </h1>

        {description && <p>{description}</p>}
      </div>
    </header>
  </Container>
);
export default Header;
