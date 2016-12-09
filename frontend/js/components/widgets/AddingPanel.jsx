import React, { PropTypes } from 'react';

const AddingPanel = ({
  addWidget,
  hideAddingPanel,
  isAddingPanelHidden,
  addingPanelPosition,
}) => (
  <div className={`adding-panel ${isAddingPanelHidden ? 'adding-panel-hidden' : ''}`}>
    <button onClick={() => { addWidget('text', addingPanelPosition); }}>Add text widget</button>
    <button onClick={() => { addWidget('picture', addingPanelPosition); }}>Add picture widget</button>
    <button onClick={() => { hideAddingPanel(); }}>[x]</button>
  </div>
);

AddingPanel.propTypes = {
  addWidget: PropTypes.func.isRequired,
  hideAddingPanel: PropTypes.func.isRequired,
  isAddingPanelHidden: PropTypes.bool.isRequired,
  addingPanelPosition: PropTypes.number.isRequired,
};

export default AddingPanel;
