import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer.js/ItemListContainer';
import ItemDetailcontainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div className="App">
       <NavBar />
       <ItemListContainer greeting= {'Bienvenidos'}/>
       <ItemDetailcontainer/>
    </div>
  )
}

export default App;
