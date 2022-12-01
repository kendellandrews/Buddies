import './App.css';
import './Components/Header/header.css'
import './Components/Home/home.css'
import './Components/Cart/cart.css'
import './Components/Product/productCard.css'
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home/home';
import Cart from './Components/Cart/cart';
// import Category from './Components/Category/category';
import Header from './Components/Header/header';
import Auth from './Components/Auth/auth';
import Product from './Components/Product/productCard';

function App() {
  return (
    <div className='App'>
        <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        {/* <Route path='/category' element={<Category/>}/> */}
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/productCard' element={<Product/>}/>


      </Routes>
    </div>
  );
}

export default App;
