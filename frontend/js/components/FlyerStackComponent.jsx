import React, { Component, PropTypes } from 'react';
// import HTML5Backend from 'react-dnd-html5-backend';
import { default as TouchBackend } from 'react-dnd-touch-backend';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { DragDropContext } from 'react-dnd';

import TextWidget from './widgets/TextWidget';

@DragDropContext(TouchBackend({ enableMouseEvents: true })) // eslint-disable-line new-cap
export default class FlyerEditorComponent extends Component {
  static propTypes = {
    flyerStack: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
    addWidget: PropTypes.func.isRequired,
    moveWidget: PropTypes.func.isRequired,
    openWidgetEdit: PropTypes.func.isRequired,
    closeWidgetEdit: PropTypes.func.isRequired,
    deleteWidget: PropTypes.func.isRequired,
    saveWidget: PropTypes.func.isRequired,
  }

  render() {
    const { addWidget, moveWidget, openWidgetEdit, closeWidgetEdit, deleteWidget, saveWidget,
      flyerStack } = this.props;

    const flyer = flyerStack.map((widget, index) => {
      switch (widget.type) {
        case 'TextWidget':
          return (
            <TextWidget
              key={widget.id}
              title={widget.title}
              text={widget.text}
              id={widget.id}
              editing={widget.editing}
              index={index}
              moveWidget={moveWidget}
              openWidgetEdit={openWidgetEdit}
              closeWidgetEdit={closeWidgetEdit}
              deleteWidget={deleteWidget}
              saveWidget={saveWidget}
            />
          );

        default:
          return null;
      }
    });

    return (
      <div className="flyer-stack">
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {flyer}
        </ReactCSSTransitionGroup>
        <button onClick={() => addWidget()}>Add Widget</button>
      </div>
    );
  }
}
