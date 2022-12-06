
import './App.css';
import NavCont from './components/NavBar/navbar';




import {BrowserRouter, Routes , Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import '../src/asyncMock.css'







function App() {




  return (
    <div className="App">
     

     <BrowserRouter >
        <NavCont/>
        <Routes>
        <Route path='/'element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId/' element={<ItemListContainer/>}/>
        <Route path='/detail/:productId/' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
