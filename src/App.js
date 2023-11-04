import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import Protectedroute from './services/Protectedroute';

function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      {/* <Route path='/' element={<Protectedroute/>}> */}
      <Route path='/' element={<Home/>}/>
      {/* </Route> */}
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
