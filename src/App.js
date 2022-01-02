import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import Container from './components/Container';
import AppBar from './components/AppBar';
// import HomeView from './views/HomeView';
// import MoviesView from './views/MoviesView';
// import MovieDetailsView from './views/MovieDetailsView';

const HomeView = lazy(() => import('./views/HomeView.js'));
const MoviesView = lazy(() => import('./views/MoviesView.js'));
const MovieDetailsView = lazy(() => import('./views/MovieDetailsView.js'));

function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/movies" exact>
            <MoviesView />
          </Route>

          <Route path="/movies/:movie_id">
            <MovieDetailsView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
