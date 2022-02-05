import logo from './logo.svg';
import './App.css';
import NavBar from './navbar/NavBar.js';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Hola Mundo"} />
    </div>
  );
}
  
export default App;