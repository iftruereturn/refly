import React, { PropTypes } from 'react';

const AddingPanel = ({
  addWidget,
  hideAddingPanel,
  isAddingPanelHidden,
  addingPanelPosition,
}) => (
  <div className={`adding-panel ${isAddingPanelHidden ? 'adding-panel-hidden' : ''}`}>
    <button onClick={() => { addWidget('header', addingPanelPosition); }}>Add header widget</button>
    <button onClick={() => { addWidget('text', addingPanelPosition); }}>Add text widget</button>
    <button onClick={() => { addWidget('image', addingPanelPosition); }}>Add image widget</button>
    <button onClick={() => { addWidget('video', addingPanelPosition); }}>Add video widget</button>
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
