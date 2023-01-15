import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting='Bienvenidos a VJ Bebidas'/>
    </div>
  );
}

export default App;
