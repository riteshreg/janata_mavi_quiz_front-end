import './App.css';
import {Routes, Route} from 'react-router-dom'
import Main from './pages/Main';
import Login from './pages/Login';
import Admin from './pages/Admin';

import PrivateComponent from './components/PrivateComponent';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route  element={<PrivateComponent/>}>
            <Route path='/admin' element={<Admin/>}/>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
