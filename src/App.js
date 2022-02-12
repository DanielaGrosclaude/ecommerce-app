import logo from './logo.svg';
import './App.css';
import NavBar from './navbar/NavBar.js';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount/ItemCount';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Hola Mundo"} />
      <ItemCount/>
    </div>
  );
}
  
export default App;