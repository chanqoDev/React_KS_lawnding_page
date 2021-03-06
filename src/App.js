import "./App.css";
import { Header } from "./components/home/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePages from "./components/pageContent/HomePages";
import Footer from "./components/home/work/Footer";
import Pages from "./components/pages/Pages";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePages} />
          <Route path="/pages" exact component={Pages} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
