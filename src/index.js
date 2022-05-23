import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reset from './styles/Reset';
import Home from './Home';
import CandidateInformation from './Candidate/CandidateInformation';
import CandidatePromise from './Candidate/CandidatePromise';
import Polls from './Polls';
import Predict from './predict/Predict';
import PredictResult from './predict/PredictResult';

ReactDOM.render(
  <BrowserRouter>
    <Reset />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/candidateinformation" element={<CandidateInformation />} />
      <Route path="/candidatepromise" element={<CandidatePromise />} />
      <Route path="/polls" element={<Polls />} />
      <Route path="/predict" element={<Predict />}/>
      <Route path="/predictresult" element={<PredictResult />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
