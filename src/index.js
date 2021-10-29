import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import GhostProvider from './provider/GhostProvider';

render(
  <GhostProvider>
    <App /> 
  </GhostProvider>,
  document.getElementById('root')
);
