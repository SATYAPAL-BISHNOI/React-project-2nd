// import { Button } from '@chakra-ui/react';
import React from 'react';
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Videos from './components/Videos';
import Upload from './components/upload';
import Login from './components/Login';
import Signup from './components/Singup';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/videos' element={<Videos/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
