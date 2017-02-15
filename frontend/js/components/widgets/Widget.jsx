import React, { Component, PropTypes } from 'react';
import { SortableElement } from 'react-sortable-hoc';
import Toolkit from '../tools/Toolkit';

@SortableElement
class Widget extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    id: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    editing: PropTypes.bool,
    openWidgetEdit: PropTypes.func.isRequired,
    closeWidgetEdit: PropTypes.func.isRequired,
    deleteWidget: PropTypes.func.isRequired,
    showAddingPanel: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    styleClasses: PropTypes.string,

    styleSettings: PropTypes.shape({
      background: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
      font: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
      theme: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
      color: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
    }),
  }

  render() {
    const { children,
      styleClasses,
      styleSettings,
      id, editing, index,
      openWidgetEdit, closeWidgetEdit, deleteWidget, showAddingPanel } = this.props;

    const classes = `widget ${editing ? '' : 'can-drag'} ${styleClasses}` +
      ` flyer-theme-${styleSettings.theme}` +
      ` flyer-background-${styleSettings.background}` +
      ` flyer-color-${styleSettings.color}` +
      ` flyer-font-${styleSettings.font}`;

    return (
      <div
        className={classes}
        onDoubleClick={() => {
          (!editing ? openWidgetEdit : closeWidgetEdit)(id);
        }}
      >
        <Toolkit
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
