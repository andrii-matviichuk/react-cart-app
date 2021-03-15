import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import CartPage from './pages/CartPage';
import PaymentPage from './pages/PaymentPage';
// Styles
import { GlobalStyle } from './App.styles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/cart" exact>
            <CartPage />
          </Route>
          <Route path="/payment" exact>
            <PaymentPage />
          </Route>
          <Route path="/">
            <h2>Incorrect Url</h2>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
