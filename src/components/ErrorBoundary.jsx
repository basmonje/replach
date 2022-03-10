import { Component } from 'react';
import Container from './Container';

// Límites de errrores
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line node/handle-callback-err
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // eslint-disable-next-line node/handle-callback-err
  componentDidCatch(error, errorInfo) {
    // Acá podríamos enviar los datos del error
    // hacía algún servidor
    // console.log(error, errorInfo );
  }

  render() {
    if (this.state.error) {
      return (
        <Container>
          <div className="-flex -flex-col -content-center -items-center">
            <h1>Ups! 🥶 ha ocurrido un error </h1>
            <p>{this.state.error?.message}</p>
          </div>
        </Container>
      );
    }

    return this.props.children;
  }
}
