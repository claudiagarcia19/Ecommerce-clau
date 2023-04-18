import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer.js/ItemListContainer';
import ItemDetailcontainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>  
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting= {'Bienvenidos'}/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>  
          <Route path="/Item/:itemId" element= {<ItemDetailcontainer/>}/>
          <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
      </BrowserRouter> 
    </div>
  )
}

export default App;
