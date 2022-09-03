import './App.css';
import 'animate.css'
import Nav from './Nav';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
     <div className="App crimson ">
    </div>
    <Routes>
      <Route index element={<Home />}/>
      <Route path='/login' element={<Login />}/>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
