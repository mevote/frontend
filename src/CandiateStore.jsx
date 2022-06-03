import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const CandidateContext = createContext();

const CandidateStore = ({ children }) => {
  const [candidate, setCandidate] = useState({});

  return (
    <CandidateContext.Provider
      value={{
        cnddtId: candidate.cnddtId,
        setCandidate,
      }}>
      {children}
    </CandidateContext.Provider>
  );
};

CandidateStore.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default CandidateStore;
