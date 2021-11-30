import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Checkout } from './Component/CheckOut/Checkout';
import Login from './Component/Login/Login';

function App() {
  return (
    <Router >
      <div className="app">
      
        <Routes>
          <Route path="/login" element={<><Login/> </>}/>
        </Routes>
        <Routes>
          <Route path="/checkout" element={<><Header/><Checkout/></>}/>
        </Routes>
        <Routes>
          <Route path="/"  element={<><Header/> <Home/> </> } />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
