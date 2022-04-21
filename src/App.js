import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import Product from './component/Product/Product';
import LogIn from './component/LogIn/LogIn';
import Logout from './component/Logout/Logout';
import Header from './component/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
        <Route path='/log-in' element={<LogIn></LogIn>}></Route>
        <Route path='/log-out' element={<Logout></Logout>}></Route>
      </Routes>
    </div>
  );
}

export default App;
