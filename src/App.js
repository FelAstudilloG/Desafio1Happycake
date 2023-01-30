/* CSS */
import 'bootstrap/dist/css/bootstrap.min.css'

/* COMPONENTS */

import Navigation from './components/Navigation'


/* ROUTES */
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./views/Home";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";


function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>


      </BrowserRouter>

    </div>
  );
}

export default App;
