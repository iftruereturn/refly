import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { SortableContainer } from 'react-sortable-hoc';

import TextWidget from './widgets/TextWidget';
import ImageWidget from './widgets/ImageWidget';

import AddingPanel from './widgets/AddingPanel';

@SortableContainer
class FlyerStackComponent extends Component {
  static propTypes = {
    flyerStack: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
    addWidget: PropTypes.func.isRequired,
    openWidgetEdit: PropTypes.func.isRequired,
    closeWidgetEdit: PropTypes.func.isRequired,
    deleteWidget: PropTypes.func.isRequired,
    saveWidget: PropTypes.func.isRequired,
    addingPanelPosition: PropTypes.number.isRequired,
    isAddingPanelHidden: PropTypes.bool.isRequired,
    showAddingPanel: PropTypes.func.isRequired,
    hideAddingPanel: PropTypes.func.isRequired,
  }

  render() {
    const { addingPanelPosition, isAddingPanelHidden,
      openWidgetEdit, closeWidgetEdit, deleteWidget, saveWidget, addWidget,
      showAddingPanel, hideAddingPanel,
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
              showAddingPanel={showAddingPanel}
            />
          );

        case 'ImageWidget':
          return (
            <ImageWidget
              key={widget.id}
              title={widget.title}
              image={widget.image}
              id={widget.id}
              editing={widget.editing}
              index={index}
              openWidgetEdit={openWidgetEdit}
              closeWidgetEdit={closeWidgetEdit}
              deleteWidget={deleteWidget}
              saveWidget={saveWidget}
              showAddingPanel={showAddingPanel}
            />
          );

        default:
          return null;
      }
    });

    flyer.splice(
      addingPanelPosition,
      0,
      <AddingPanel
        key={'AddingPanel'}
        isAddingPanelHidden={isAddingPanelHidden}
        addingPanelPosition={addingPanelPosition}
        addWidget={addWidget}
        hideAddingPanel={hideAddingPanel}
      />
    );

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

export default FlyerStackComponent; // eslint-disable-line new-cap
