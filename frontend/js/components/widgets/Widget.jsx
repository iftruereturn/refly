import React, { Component, PropTypes } from 'react';
import { SortableElement } from 'react-sortable-hoc';
import Toolkit from '../tools/Toolkit';

@SortableElement
class Widget extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    editing: PropTypes.bool,
    openWidgetEdit: PropTypes.func.isRequired,
    closeWidgetEdit: PropTypes.func.isRequired,
    deleteWidget: PropTypes.func.isRequired,
    showAddingPanel: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    styleClasses: PropTypes.string,
  }

  render() {
    const { children,
      styleClasses,
      id, editing, index,
      openWidgetEdit, closeWidgetEdit, deleteWidget, showAddingPanel } = this.props;
    const classes = `widget ${editing ? '' : 'can-drag'} ${styleClasses}`;

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
          showAddingPanel={showAddingPanel}
          index={index}
        />
        {children}
      </div>
    );
  }
}

export default Widget; // eslint-disable-line new-cap
