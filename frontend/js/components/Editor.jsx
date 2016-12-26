import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { SortableContainer } from 'react-sortable-hoc';

import TextWidget from './widgets/TextWidget';
import ImageWidget from './widgets/ImageWidget';
import HeaderWidget from './widgets/HeaderWidget';
import VideoWidget from './widgets/VideoWidget';

import AddingPanel from './tools/AddingPanel';

@SortableContainer
class Editor extends Component {
  static propTypes = {
    flyerId: PropTypes.string.isRequired,

    flyerStack: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types

    flyerInfo: PropTypes.shape({
      background: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
      font: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
      theme: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
      color: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
      addingPanelPosition: PropTypes.number.isRequired,
      isAddingPanelHidden: PropTypes.bool.isRequired,
    }),

    addWidget: PropTypes.func.isRequired,
    openWidgetEdit: PropTypes.func.isRequired,
    closeWidgetEdit: PropTypes.func.isRequired,
    deleteWidget: PropTypes.func.isRequired,
    saveWidget: PropTypes.func.isRequired,

    showAddingPanel: PropTypes.func.isRequired,
    hideAddingPanel: PropTypes.func.isRequired,

    fetchFlyer: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    const { flyerId, fetchFlyer } = this.props;
    fetchFlyer(flyerId);
  }

  render() {
    const { openWidgetEdit, closeWidgetEdit, deleteWidget, saveWidget, addWidget,
      showAddingPanel, hideAddingPanel,
      flyerStack } = this.props;

    const { addingPanelPosition, isAddingPanelHidden } = this.props.flyerInfo;

    const styleSettings = {
      color: this.props.flyerInfo.color,
      font: this.props.flyerInfo.font,
      theme: this.props.flyerInfo.theme,
      background: this.props.flyerInfo.background,
    };

    const classNamesFlyer = `flyer-stack flyer-theme-${this.props.flyerInfo.theme}` +
      ` flyer-background-${this.props.flyerInfo.background}`;

    const flyer = flyerStack.map((widget, index) => {
      switch (widget.type) {
        case 'TextWidget':
          return (
            <TextWidget
              key={widget._id}
              title={widget.title}
              text={widget.text}
              id={widget._id}
              editing={widget.editing}
              index={index}
              openWidgetEdit={openWidgetEdit}
              closeWidgetEdit={closeWidgetEdit}
              deleteWidget={deleteWidget}
              saveWidget={saveWidget}
              showAddingPanel={showAddingPanel}
              styleSettings={styleSettings}
            />
          );

        case 'ImageWidget':
          return (
            <ImageWidget
              key={widget._id}
              title={widget.title}
              image={widget.image}
              id={widget._id}
              editing={widget.editing}
              index={index}
              openWidgetEdit={openWidgetEdit}
              closeWidgetEdit={closeWidgetEdit}
              deleteWidget={deleteWidget}
              saveWidget={saveWidget}
              showAddingPanel={showAddingPanel}
              styleSettings={styleSettings}
            />
          );

        case 'HeaderWidget':
          return (
            <HeaderWidget
              key={widget._id}
              title={widget.title}
              text={widget.text}
              id={widget._id}
              editing={widget.editing}
              index={index}
              openWidgetEdit={openWidgetEdit}
              closeWidgetEdit={closeWidgetEdit}
              deleteWidget={deleteWidget}
              saveWidget={saveWidget}
              showAddingPanel={showAddingPanel}
              styleSettings={styleSettings}
            />
          );

        case 'VideoWidget':
          return (
            <VideoWidget
              key={widget._id}
              title={widget.title}
              videoUrl={widget.videoUrl}
              id={widget._id}
              editing={widget.editing}
              index={index}
              openWidgetEdit={openWidgetEdit}
              closeWidgetEdit={closeWidgetEdit}
              deleteWidget={deleteWidget}
              saveWidget={saveWidget}
              showAddingPanel={showAddingPanel}
              styleSettings={styleSettings}
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
      <div className={classNamesFlyer}>
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

export default Editor; // eslint-disable-line new-cap
