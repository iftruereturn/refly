import React, { Component, PropTypes } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import TextWidget from './widgets/TextWidget';

@DragDropContext(HTML5Backend) // eslint-disable-line new-cap
export default class FlyerEditorComponent extends Component {
  static propTypes = {
    flyerStack: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
    addWidget: PropTypes.func.isRequired,
    moveWidget: PropTypes.func.isRequired,
    openWidgetEdit: PropTypes.func.isRequired,
    closeWidgetEdit: PropTypes.func.isRequired,
  }

  render() {
    const { addWidget, moveWidget, openWidgetEdit, closeWidgetEdit,
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
            />
          );

        default:
          return null;
      }
    });

    return (
      <div className="flyer-stack">
        {flyer}
        <button onClick={() => addWidget()}>Add Widget</button>
      </div>
    );
  }
}
