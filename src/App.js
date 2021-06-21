import "./App.css";
import Header from "./components/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetails from "./components/productDetails";
import ProductListing from "./components/productListing";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetails} />
          <Route> 404 NOT FOUND!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
