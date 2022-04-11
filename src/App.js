import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home/Home.js";
import Pages from "./Pages";
import Products from "./Products";
import Blog from "./Blog";
import Header from "./Header";
import Shop from "./Shop";
import Footer from "./Footer";
import Account from "./Account";
import Contact from "./Contact";
import Faq from "./Faq";
import Hektodemo from "./Hektodemo";
import Shoplist from "./Components/Shoplist";
import Error from './Error';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/pages" exact component={Pages} />
          <Route path="/products" exact component={Products} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/account" exact component={Account} />
          <Route path="/FAQ" exact component={Faq} />
          <Route path="/hektodemo" exact component={Hektodemo} />
          <Route path="/shoplist" exact component={Shoplist} />
          <Route path="/error" exact component={Error} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
