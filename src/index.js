import { BrowserRouter } from 'react-router-dom';
import reactDOM from 'react-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import App from './routes';
import './assets/main.css';
import '../node_modules/@uren/theme/lib/index.css';

reactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
