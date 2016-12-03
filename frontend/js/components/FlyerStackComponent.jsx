import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { SortableContainer } from 'react-sortable-hoc';

import TextWidget from './widgets/TextWidget';

@SortableContainer
class FlyerEditorComponent extends Component {
  static propTypes = {
    flyerStack: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
    // addWidget: PropTypes.func.isRequired,
    openWidgetEdit: PropTypes.func.isRequired,
    closeWidgetEdit: PropTypes.func.isRequired,
    deleteWidget: PropTypes.func.isRequired,
    saveWidget: PropTypes.func.isRequired,
  }

  render() {
    const { openWidgetEdit, closeWidgetEdit, deleteWidget, saveWidget,
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
          transitionName="widget-transition"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {flyer}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default FlyerEditorComponent; // eslint-disable-line new-cap
