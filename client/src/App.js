import './App.css';
import 'animate.css'
import Nav from './Nav';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
     <div className="App crimson ">
    <Nav />
    </div>
    <Routes>
      <Route index element={<Home />}/>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
