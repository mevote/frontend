import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reset from './styles/Reset';
import Candidate from './Candidate';
import Home from './Home';
import Polls from './Polls';

ReactDOM.render(
  <BrowserRouter>
    <Reset />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/candidate" element={<Candidate />} />
      <Route path="/polls" element={<Polls />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
