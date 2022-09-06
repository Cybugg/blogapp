import './App.css';
import 'animate.css'
import Nav from './Nav';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Blogs from './components/blogs';
import UserBlogs from './components/userBlogs';
import BlogDetails from './components/blogDetails';
import AddBlog from './components/addBlog';
import Signup from './pages/signup';

function App() {
  return (
    <BrowserRouter>
     <div className="App crimson ">
    </div>
    <Routes>
      <Route index element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/blogs' element={<Blogs />}/>
      <Route path='/myBlogs' element={<UserBlogs />}/>
      <Route path='/myBlogs/:id' element={<BlogDetails />}/>
      <Route path='/blogs/add' element={<AddBlog />}/>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
