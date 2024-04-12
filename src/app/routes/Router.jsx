import { Home } from "pages/Home";
import { Movies } from "pages/Movies";
import { Routes, Route } from "react-router-dom";

function Router() {
    return (
        
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies/>} />
    </Routes>

    )
    
  }
  export default Router;