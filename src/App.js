import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from "./pages/homepage/HomePage"
import Shop from './pages/shop/Shop';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/shop" exact={true} component={Shop} />
      </Switch>
    </Router>
  );
}

export default App;
