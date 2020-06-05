import React from 'react';

import './spinner.css';

const Spinner = () => {
  return (
    <div className="spinner__wrapper">
      <div className="ispinner ispinner-large">
        <div className="ispinner-blade"></div>
        <div className="ispinner-blade"></div>
        <div className="ispinner-blade"></div>
        <div className="ispinner-blade"></div>
        <div className="ispinner-blade"></div>
        <div className="ispinner-blade"></div>
        <div className="ispinner-blade"></div>
        <div className="ispinner-blade"></div>
        <div className="ispinner-blade"></div>
        <div className="ispinner-blade"></div>
        <div className="ispinner-blade"></div>
        <div className="ispinner-blade"></div>
      </div>
    </div>
  );
};

export default Spinner;