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
  <div className="widget__toolkit toolkit">
    <button
      className="toolkit__button toolkit__button_theme_delete"
      onClick={() => { deleteWidget(id); }}
    >
      [x]
    </button>
    <button
      className="toolkit__button toolkit__button_theme_edit"
      onClick={() => { (!editing ? openWidgetEdit : closeWidgetEdit)(id); }}
    >
      {!editing ? 'Edit' : 'Cancel'}
    </button>
    <button
      className="toolkit__button toolkit__button_theme_add-top"
      onClick={() => { showAddingPanel(index); }}
    >
      Add ^
    </button>
    <button
      className="toolkit__button toolkit__button_theme_add-bottom"
      onClick={() => { showAddingPanel(index + 1); }}
    >
      Add v
    </button>
  </div>
);

Toolkit.propTypes = {
  id: PropTypes.string.isRequired,
  editing: PropTypes.bool,
  index: PropTypes.number.isRequired,
  openWidgetEdit: PropTypes.func.isRequired,
  closeWidgetEdit: PropTypes.func.isRequired,
  deleteWidget: PropTypes.func.isRequired,
  showAddingPanel: PropTypes.func.isRequired,
};

export default Toolkit;
