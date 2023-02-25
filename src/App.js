import logo from './logo.svg';
import './App.css';
import './index.css'
import Land from './components/Land';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Add from './components/Add';
import AddReport from './components/AddReport';
import Update from './components/Update';
import GetStarted from './components/GetStarted';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Land/>}/>
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/home' element={<Home/>} />
        <Route exact path='/add' element={<Add/>} />
        <Route exact path='/addReport' element={<AddReport/>} />
        <Route exact path='/update' element={<Update/>} />
        <Route exact path='/getStarted' element={<GetStarted/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
