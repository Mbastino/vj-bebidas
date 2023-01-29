import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemDetailContainer from './pages/ItemDetailConteiner/ItemDetailContainer';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';



function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='item/:id' element={<ItemDetailContainer/>}/>
      </Routes> 
    </BrowserRouter>    
  );
}

export default App;
