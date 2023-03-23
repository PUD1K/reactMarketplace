import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Spinner animation="border" variant="primary" role="status" style={{ width: '5rem', height: '5rem' }}>
      </Spinner>
    </div>
  );
}

export default LoadingSpinner;