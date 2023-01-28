import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';



function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer/>
    </>    
  );
}

export default App;
