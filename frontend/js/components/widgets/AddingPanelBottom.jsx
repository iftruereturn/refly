import React, { PropTypes } from 'react';

const AddingPanelBottom = ({ addWidget }) => (
  <div>
    <button onClick={() => { addWidget('text'); }}>Add text widget</button>
    <button>Add picture widget</button>
  </div>
);

AddingPanelBottom.propTypes = {
  addWidget: PropTypes.func.isRequired,
};

export default AddingPanelBottom;
