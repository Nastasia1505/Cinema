import { Home } from "pages/Home";
import { MovieDescription } from "pages/MovieDescription";
import Movies from "pages/Movies/Movies";


import { Routes, Route } from "react-router-dom";

function Router() {
    return (
        
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/afisha/duna" element={<MovieDescription/>} />
    </Routes>

    )
    
  }
  export default Router;