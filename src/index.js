import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reset from './styles/Reset';
import HomePage from './pages/Homepage';
import CandidatePage from './pages/CandidatePage';
import PromiseVoicePage from './pages/PromiseVoicepage';
import PollsPage from './pages/PollsPage';
import PromisePage from './pages/Promisepage';

ReactDOM.render(
  <BrowserRouter>
    <Reset />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/candidate" element={<CandidatePage />} />
      <Route path="/polls" element={<PollsPage />} />
      <Route path="/promise" element={<PromisePage />} />
      <Route path="/voice" element={<PromiseVoicePage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
