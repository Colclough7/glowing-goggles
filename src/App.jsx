import {
  Navigate,
  Routes,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import './App.css'



const App = () => {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route path='*' element={<Navigate to ="/" />}/>
        </Routes>
      </Router>
    </div>
  );
};


export default App