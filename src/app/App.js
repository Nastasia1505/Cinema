import { Layout } from "./Layout";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout></Layout>
      <Router></Router>
      </BrowserRouter>

    </div>
  );
}

export default App;
