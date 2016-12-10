import React, { PropTypes } from 'react';

const AddingPanelBottom = ({ addWidget }) => (
  <div>
    <button onClick={() => { addWidget('header'); }}>Add header widget</button>
    <button onClick={() => { addWidget('text'); }}>Add text widget</button>
    <button onClick={() => { addWidget('image'); }}>Add image widget</button>
    <button onClick={() => { addWidget('video'); }}>Add video widget</button>
  </div>
);

AddingPanelBottom.propTypes = {
  addWidget: PropTypes.func.isRequired,
};

export default AddingPanelBottom;
