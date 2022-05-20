import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reset from './styles/Reset';
import Home from './Home';

ReactDOM.render(
  <BrowserRouter>
    <Reset />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Home />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
