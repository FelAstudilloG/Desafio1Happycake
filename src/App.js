import 'bootstrap/dist/css/bootstrap.min.css'



import Navigation from './components/Navigation'



import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css';

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
