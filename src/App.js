import logo from './logo.svg';
import './App.css';
import ViewShop from './components/ViewShop';
import AddShop from './components/AddShop';
import SearchShop from './components/SearchShop';
import DeleteShop from './components/DeleteShop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddShop/>}/>
    <Route path='/DeleteShop' element={<DeleteShop/>}/>
    <Route path='/SearchShop' element={<SearchShop/>}/>
    <Route path='/ViewShop' element={<ViewShop/>}/>
    
   </Routes>
   </BrowserRouter>
  );
}

export default App;
