import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./sass/main.scss";
import MainPage from "./pages/MainPage";
import HotelsListPage from "./pages/HotelsListPage";

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/mainpage">
            <MainPage />
          </Route>
          <Route exact path="/hotelslist">
            <HotelsListPage />
          </Route>
          <Route exact path="">
            <Redirect exact from="/" to="hotelslist" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
