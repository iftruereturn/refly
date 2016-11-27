import React, { Component, PropTypes } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import TextWidget from './widgets/TextWidget';

@DragDropContext(HTML5Backend) // eslint-disable-line new-cap
export default class FlyerEditorComponent extends Component {
  static propTypes = {
    addWidget: PropTypes.func.isRequired,
    moveWidget: PropTypes.func.isRequired,
    flyerStack: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  }

  render() {
    const { addWidget, moveWidget,
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
              index={index}
              moveWidget={moveWidget}
            />
          );

        default:
          return null;
      }
    });

    return (
      <div>
        {flyer}
        <button onClick={() => addWidget()}>Add Widget</button>
      </div>
    );
  }
}

// FlyerStackEditor = DragDropContext(HTML5Backend)(FlyerStackEditor);
