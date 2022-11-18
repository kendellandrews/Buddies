import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home/home';
import Cart from './Components/Cart/cart';
import Catagory from './Components/Catagory/catagory';
import Header from './Components/Header/header';
import Login from './Components/Login/login';
import Product from './Components/Product/productCard';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/catagory' element={<Catagory/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/productCard' element={<Product/>}/>
        <Route path='/header' element={<Header/>}/>


      </Routes>
    </div>
  );
}

export default App;
