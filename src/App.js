import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import { auth } from './firebase/firebase.utils';
import HomePage from "./pages/homepage/HomePage"
import Shop from './pages/shop/Shop';
import signInSignUp from './pages/signInSignUp/signInSignUp';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/sign-in" component={signInSignUp} />
        </Switch>
      </Router>
    );
  }
}

export default App;
