import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home/home';
import Contact from "./pages/contact/contact";
import Services from "./pages/services/services";
import About from "./pages/about/about";
import Products from "./pages/products/products";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

