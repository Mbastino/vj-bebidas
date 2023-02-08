import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemDetailContainer from './pages/ItemDetailConteiner/ItemDetailContainer';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import CartProvider from './context/cartProvider';
import Cart from './pages/Cart/Cart';


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
      <NavBar/>
      <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:category' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='cart' element={<Cart/>} />
      </Routes> 
      </CartProvider>
    </BrowserRouter>    
  );
}

export default App;
