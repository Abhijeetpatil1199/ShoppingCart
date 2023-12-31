
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter basename='/ShoppingCart'>
      <Header />
      {/* <Home/> */}
      <div>
        
        <Routes>
          <Route path='/' exact element={<Home/>}>
            {/* <Home /> */}
          </Route>
          <Route path='/cart' exact element={<Cart/>}>
            {/* <Cart /> */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
