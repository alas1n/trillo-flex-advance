import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./sass/main.scss";
import MainPage from "./pages/MainPage";
import HotelsListPage from "./pages/HotelsListPage";
import Testpage from "./pages/test";

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
          {/* <Route exact path="/testpage">
            <Testpage />
          </Route> */}
          <Route exact path="">
            <Redirect exact from="/" to="hotelslist" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
