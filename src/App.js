import React, { Suspence, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import Loader from './components/Loader';
// import Container from './components/Container';
import routes from './routes';
import './styles/base.scss';

const Homepage = lazy(() =>
  import('./pages/Homepage.js' /* webpackChunkName: "Homepage" */),
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage.js' /* webpackChunkName: "MoviesPage" */),
);
const MoviesDetailsPage = lazy(() =>
  import(
    './pages/MoviesDetailsPage.js' /* webpackChunkName: "MoviesDetailsPage" */
  ),
);

const App = () => {
  return (
    <>
      <AppBar />

      <Suspence fallback={Loader}>
        <Switch>
          <Route exact path={routes.home} component={Homepage} />
          <Route
            path={routes.MoviesDetailsPage}
            component={MoviesDetailsPage}
          />
          <Route path={routes.movies} component={MoviesPage} />
          <Route component={Homepage} />
        </Switch>
      </Suspence>
    </>
  );
};

export default App;
