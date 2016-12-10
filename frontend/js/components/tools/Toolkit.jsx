import React, { PropTypes } from 'react';

const Toolkit = ({
  deleteWidget,
  editing,
  openWidgetEdit,
  closeWidgetEdit,
  id,
  showAddingPanel,
  index,
}) => (
  <div className="toolkit">
    <button
      onClick={() => { deleteWidget(id); }}
    >
      [x]
    </button>
    <button
      onClick={() => { (!editing ? openWidgetEdit : closeWidgetEdit)(id); }}
    >
      {!editing ? 'Edit' : 'Cancel'}
    </button>
    <button onClick={() => { showAddingPanel(index); }}>
      Add ^
    </button>
    <button onClick={() => { showAddingPanel(index + 1); }}>
      Add v
    </button>
  </div>
);

Toolkit.propTypes = {
  id: PropTypes.number.isRequired,
  editing: PropTypes.bool,
  index: PropTypes.number.isRequired,
  openWidgetEdit: PropTypes.func.isRequired,
  closeWidgetEdit: PropTypes.func.isRequired,
  deleteWidget: PropTypes.func.isRequired,
  showAddingPanel: PropTypes.func.isRequired,
};

export default Toolkit;
