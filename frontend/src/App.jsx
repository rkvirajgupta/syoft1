import logo from './logo.svg';
import './App.css';
import {Login} from './component/login/Login'
import { Signup } from './component/signup/SignUp';
import { UserData } from './component/product/UserData';
import { Navbar } from './component/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path='/product' element={<UserData/>}></Route>   
         <Route path='/login' element={<Login/>}></Route>
         <Route path='/signup' element={<Signup/>}></Route>


     </Routes>
    
    </div>
  );
}

export default App;
