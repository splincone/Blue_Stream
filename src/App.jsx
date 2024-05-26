import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Contact from "./assets/pages/Contact";
import NoPage from "./assets/pages/NoPage";
import Header from "./assets/components/Header";
import "./App.css";
import Movies from "./assets/pages/Movies";
import Series from "./assets/pages/Series";
import Details from "./assets/pages/Details";
import Footer from "./assets/components/Footer";

export default function App() {
  return (
    <div className="container">
      <Header />
        <Routes>
          <Route exact path="/home" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="*" Component={NoPage} />
          <Route path="/movies" Component={Movies} />
          <Route path="/series" Component={Series} />
          <Route path="/details/:type/:id/:title" Component={Details} />
        </Routes>
      <Footer />
    </div>
  );
}
