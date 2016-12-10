import React, { PropTypes } from 'react';

const AddingPanelBottom = ({ addWidget }) => (
  <div>
    <button onClick={() => { addWidget('header'); }}>Add header widget</button>
    <button onClick={() => { addWidget('text'); }}>Add text widget</button>
    <button onClick={() => { addWidget('picture'); }}>Add picture widget</button>
  </div>
);

AddingPanelBottom.propTypes = {
  addWidget: PropTypes.func.isRequired,
};

export default AddingPanelBottom;
