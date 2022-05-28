import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reset from './styles/Reset';
// import Home from './Home';
import HomePage from './Homepage';
import CandidateInformationpage from './Candidate/CandidateInformationpage';
import Polls from './Polls';

ReactDOM.render(
  <BrowserRouter>
    <Reset />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/candidateinformation" element={<CandidateInformationpage />} />
      <Route path="/polls" element={<Polls />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
