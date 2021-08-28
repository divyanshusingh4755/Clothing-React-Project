import { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import './App.css';
import Header from './components/Header/Header';
import Checkout from './pages/checkout/Checkout';
import HomePage from "./pages/homepage/HomePage"
import Shop from './pages/shop/Shop';
import SignInSignUp from './pages/signInSignUp/signInSignUp';
import { checkUserSession } from './redux/user/userAction';
import { selectCurrentUser } from './redux/user/userSelector';

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/sign-in" render={() =>
            this.props.currentUser ?
              <Redirect to='/' />
              :
              <SignInSignUp />
          } />
        </Switch>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
