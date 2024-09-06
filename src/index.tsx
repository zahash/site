/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import Home from './pages/Home';
import JsonCodeGen from './pages/JsonCodeGen';
import { Route, Router } from '@solidjs/router';
import { MetaProvider } from '@solidjs/meta';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => (
  <MetaProvider>
    <Router>
      <Route path="/" component={Home} />
      <Route path="/jsoncodegen" component={JsonCodeGen} />
    </Router>
  </MetaProvider>
), root!);
