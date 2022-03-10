import propTypes from 'prop-types';
import Container from './Container';

// Patrón de diseño: Stateless
const Message = ({ title }) => (
  <Container>
    <div className='-py-4'>
      <h2 className='-text-large -text-md-massive'>{title}</h2>
    </div>
  </Container>
);

Message.propTypes = {
  title: propTypes.string.isRequired
};

export default Message;
