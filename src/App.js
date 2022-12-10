import './App.css';
import {Routes, Route} from 'react-router-dom'
import Main from './pages/Main';
import Login from './pages/Login';
import Admin from './pages/Admin';

import PrivateComponent from './components/PrivateComponent';
import Navbar from './components/Navbar';
import AddQuestion from './pages/AddQuestion';
import { useState } from 'react';

function App() {
  const [score, setScore] = useState(0)

  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main score={score} setScore={setScore}/>}/>
          <Route path='/' element={<Login  score={score}/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route  element={<PrivateComponent/>}>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/add-question' element={<AddQuestion/>}/>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
