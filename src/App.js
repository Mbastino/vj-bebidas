import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';

import Items from './components/Items/Items';


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='*' element={<div>Error</div>}/>
        <Route path='/productos' element={<ItemListContainer/>}/>
        </Routes>
    </BrowserRouter>   
  );
}

export default App;
