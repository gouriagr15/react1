import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Car from './components/Car';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  
    <Router>
      <Routes>
      <Route exact path="/" element={<Car/>} />
      <Route path="/page/:page" element={<Car />} />
      </Routes>
    </Router>
    


   
  );
}

export default App;
