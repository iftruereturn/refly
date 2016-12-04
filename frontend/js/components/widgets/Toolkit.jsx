import React, { PropTypes } from 'react';

const Toolkit = ({ deleteWidget, editing, openWidgetEdit, closeWidgetEdit, id }) => (
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
  </div>
);

Toolkit.propTypes = {
  id: PropTypes.number.isRequired,
  editing: PropTypes.bool,
  openWidgetEdit: PropTypes.func.isRequired,
  closeWidgetEdit: PropTypes.func.isRequired,
  deleteWidget: PropTypes.func.isRequired,
};

export default Toolkit;
