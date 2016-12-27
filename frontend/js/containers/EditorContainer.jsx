import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import * as flyerActions from '../actions/flyer';

import Editor from '../components/Editor';
import AddingPanelBottom from '../components/tools/AddingPanelBottom';
import SidePanel from '../components/editor/SidePanel';

const EditorContainer = props => (
  <div className="flyer-editor">
    <div className="flyer-stack-wrapper">
      <Editor
        {...props}
        onSortEnd={props.moveWidget}
        distance={10}
        lockAxis={'y'}
        lockToContainerEdges
        helperClass={'dnd-transparent'}
      />
      {
        props.flyerStack.length > 0 ?
          null :
          <AddingPanelBottom addWidget={props.addWidget} />
      }
      <SidePanel
        {...props.flyerPossibleSettings}
        {...props}
      />
    </div>
  </div>
);

EditorContainer.propTypes = {
  moveWidget: PropTypes.func.isRequired,
  addWidget: PropTypes.func.isRequired,
  flyerStack: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types,
  // eslint-disable-next-line react/forbid-prop-types,
  flyerPossibleSettings: PropTypes.object.isRequired,
};

const mapStateToProps = (state, { params }) => (
  { flyerInfo: state.flyerInfo,
    flyerStack: state.flyerStack,
    flyerPossibleSettings: state.flyerPossibleSettings,
    flyerId: params.flyerId }
);

export default connect(mapStateToProps, flyerActions)(EditorContainer);
