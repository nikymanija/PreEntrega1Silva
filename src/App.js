
import './App.css';
import NavCont from './components/NavBar/navbar';
import ItemListContainer from './components/ItemListContainer/itemlistcontainer';

function App() {
  return (
    <div className="App">
      
      <NavCont/>
      <ItemListContainer greating='Choise your Drone'/>
       
    </div>
  );
}

export default App;
