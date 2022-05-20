import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reset from './styles/Reset';
import Home from './Home';
import CandidateInformation from './Candidate/CandidateInformation';
import CandidatePromise from './Candidate/CandidatePromise';
import Polls from './Polls';

ReactDOM.render(
  <BrowserRouter>
    <Reset />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/candidateinformation" element={<CandidateInformation />} />
      <Route path="/candidatepromise" element={<CandidatePromise />} />
      <Route path="/polls" element={<Polls />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
