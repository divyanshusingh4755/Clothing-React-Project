import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import HomePage from "./pages/homepage/HomePage"
import Shop from './pages/shop/Shop';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/shop" exact={true} component={Shop} />
      </Switch>
    </Router>
  );
}

export default App;
