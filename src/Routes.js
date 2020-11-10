import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './sass/main.scss';
import MainPage from './pages/MainPage';
import MammadsPage from './pages/mamandsPages'

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/mainpage">
            <MainPage />
          </Route>
          <Route path="/mamdsPage">
            <MammadsPage />
          </Route>
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;