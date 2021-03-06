import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/Homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./Component/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
// import Quotes from "./pages/quotes/quotes";

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
        {/* <Route path="/quotes" component={Quotes} /> */}

      </Switch>
    </div>
  );
}

export default App;
