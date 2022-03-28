import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Coinpage from "./Pages/Coinpage.js";

function App() {
 return (
  <div className="App">
   <Router>
    <Route path="/" exact>
     <div>
      <Home />
     </div>
    </Route>
    <Route path="/CoinPage/:id" exact>
     <div>
      <Coinpage />
     </div>
    </Route>
   </Router>
  </div>
 );
}

export default App;
