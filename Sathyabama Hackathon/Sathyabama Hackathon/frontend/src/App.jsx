import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Doctorside from './components/Doctor-side';
import Details from './components/Details';
import User from "./components/User/User.jsx";
import Login2 from './components/Login2/Login2.jsx';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='doclogin' element={<Login2 />} />
        <Route path="/userpage" element={<User />} /> 
        <Route path="/doctor" element={<Doctorside />} /> 
        <Route path="/details" element={<Details />} /> 
      </Routes>
    </Router>
  );
}

export default App;
