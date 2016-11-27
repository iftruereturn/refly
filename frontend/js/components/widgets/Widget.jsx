import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import DnDTypes from '../../constants/DnD/types';

const widgetSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index,
    };
  },
};

const widgetTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    props.moveWidget(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex; // eslint-disable-line no-param-reassign
  },
};

@DropTarget(DnDTypes.WIDGET, widgetTarget, connect => ({ // eslint-disable-line new-cap
  connectDropTarget: connect.dropTarget(),
}))
@DragSource(DnDTypes.WIDGET, widgetSource, (connect, monitor) => ({ // eslint-disable-line new-cap
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))
class Widget extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired, // eslint-disable-line react/no-unused-prop-types
    index: PropTypes.number.isRequired, // eslint-disable-line react/no-unused-prop-types
    moveWidget: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
    children: PropTypes.node.isRequired,
  }

  render() {
    const { children,
      connectDragSource, connectDropTarget, isDragging } = this.props;
    const opacity = isDragging ? 0 : 1;

    return connectDragSource(connectDropTarget(
      <div className="widget" style={{ opacity }}>
        {children}
      </div>
    ));
  }
}

export default Widget;
