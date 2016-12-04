import React, { Component, PropTypes } from 'react';
import { SortableElement } from 'react-sortable-hoc';
import Toolkit from './Toolkit';

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
        <Toolkit
          className={'toolkit'}
          deleteWidget={deleteWidget}
          editing={editing}
          openWidgetEdit={openWidgetEdit}
          closeWidgetEdit={closeWidgetEdit}
          id={id}
        />
        {children}
      </div>
    );
  }
}

export default Widget; // eslint-disable-line new-cap
