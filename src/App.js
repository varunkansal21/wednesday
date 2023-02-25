import logo from './logo.svg';
import './App.css';
import './index.css'
import Land from './components/Land';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Land/>}/>
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/home' element={<Home/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
