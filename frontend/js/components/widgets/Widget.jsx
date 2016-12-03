import React, { Component, PropTypes } from 'react';
import { SortableElement } from 'react-sortable-hoc';

@SortableElement
class Widget extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    id: PropTypes.number.isRequired, // eslint-disable-line react/no-unused-prop-types
    index: PropTypes.number.isRequired, // eslint-disable-line react/no-unused-prop-types
    editing: PropTypes.bool,
    openWidgetEdit: PropTypes.func.isRequired,
    closeWidgetEdit: PropTypes.func.isRequired,
    deleteWidget: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  }

  render() {
    const { children,
      id, editing,
      openWidgetEdit, closeWidgetEdit, deleteWidget } = this.props;
    const classes = `widget ${editing ? '' : 'can-drag'}`;

    return (
      <div
        className={classes}
        onDoubleClick={() => {
          (!editing ? openWidgetEdit : closeWidgetEdit)(id);
        }}
      >
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
        {children}
      </div>
    );
  }
}

export default Widget; // eslint-disable-line new-cap
