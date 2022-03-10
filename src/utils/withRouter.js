import { useMemo } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';

// Patrón de diseño: HOC
function withRouter(Component) {
  return function ComponentWithRouterProps(props) {
    const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();
    const query = useMemo(
      () => new URLSearchParams(location.search),
      [location.search]
    );

    return (
      <Component {...props} router={{ location, params, navigate, query }} />
    );
  };
}

export default withRouter;
