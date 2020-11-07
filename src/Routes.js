import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './sass/main.scss';
import MainPage from './pages/MainPage';

function Routes() {
  return (
    <div>
      <MainPage />
    </div>
  );
}

export default Routes;
