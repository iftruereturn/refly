import React, { PropTypes } from 'react';

const AddingPanel = ({ addWidget }) => (
  <div>
    <button onClick={() => { addWidget('text'); }}>Add text widget</button>
    <button>Add picture widget</button>
  </div>
);

AddingPanel.propTypes = {
  addWidget: PropTypes.func.isRequired,
};

export default AddingPanel;
