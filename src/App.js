import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <BasicExample />
      <ItemListContainer/>
    </div>
  );
}

export default App;
