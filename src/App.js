import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import MyOrder from './screens/MyOrder';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SignUp from './screens/SignUp';
import { CartProvider } from './components/ContextReducer';

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path='/createuser' element={<SignUp />}></Route>
            <Route path='myOrder' element={<MyOrder />}></Route>
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
