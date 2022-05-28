import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reset from './styles/Reset';
import HomePage from './pages/Homepage';
import CandidatePage from './pages/CandidatePage';
import CandidatePromise from './Candidate/CandidatePromise';
import PollsPage from './pages/PollsPage';

ReactDOM.render(
  <BrowserRouter>
    <Reset />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/candidate" element={<CandidatePage />} />
      <Route path="/candidatepromise" element={<CandidatePromise />} />
      <Route path="/polls" element={<PollsPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
