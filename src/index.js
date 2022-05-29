import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reset from './styles/Reset';
// import Home from './Home';
import HomePage from './Homepage';
import CandidateInformationpage from './Candidate/CandidateInformationpage';
import CandidatePromisepage from './Candidate/CandidatePromisepage';
import Polls from './Polls';

ReactDOM.render(
  <BrowserRouter>
    <Reset />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/candidateInformation" element={<CandidateInformationpage />} />
      <Route path="/candidatePromise" element={<CandidatePromisepage />} />
      <Route path="/polls" element={<Polls />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
