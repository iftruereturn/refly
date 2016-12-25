import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import * as flyerActions from '../actions/flyer';

import FlyerStackComponent from '../components/FlyerStackComponent';
import AddingPanelBottom from '../components/tools/AddingPanelBottom';
import SidePanel from '../components/editor/SidePanel';

const FlyerStackEditor = props => (
  <div className={'flyer-stack-wrapper'}>
    <FlyerStackComponent
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
);

FlyerStackEditor.propTypes = {
  moveWidget: PropTypes.func.isRequired,
  addWidget: PropTypes.func.isRequired,
  flyerStack: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types,
  // eslint-disable-next-line react/forbid-prop-types,
  flyerPossibleSettings: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => (
  { flyerInfo: state.flyerInfo,
    flyerStack: state.flyerStack,
    flyerPossibleSettings: state.flyerPossibleSettings,
    flyerId: ownProps.id }
);

// const mapDispatchToProps = (dispatch) => {
// }

export default connect(mapStateToProps, flyerActions)(FlyerStackEditor);
