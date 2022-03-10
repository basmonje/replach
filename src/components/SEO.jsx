import { Helmet } from 'react-helmet';

// Patrón de diseño: Stateless
const SEO = ({
  title,
  description = 'Replach descargar cientos de imágenes gratuitas de Unsplash'
}) => (
  <Helmet>
    <title>{title} | Replach</title>
    <meta name="description" content={description} />
  </Helmet>
);

export default SEO;
