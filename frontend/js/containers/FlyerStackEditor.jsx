import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import * as FlyerActions from '../actions/FlyerActions';
import FlyerStackComponent from '../components/FlyerStackComponent';

const FlyerStackEditor = props => (
  <div className={'flyer-stack-wrapper'}>
    <FlyerStackComponent
      {...props}
      onSortEnd={props.moveWidget}
      distance={10}
      lockAxis={'y'}
      helperClass={'dnd-transparent'}
    />
    <button onClick={props.addWidget}>Add Widget</button>
  </div>
);

FlyerStackEditor.propTypes = {
  moveWidget: PropTypes.func.isRequired,
  addWidget: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  { ...state.flyerInfo,
    flyerStack: state.flyerStack }
);

// const mapDispatchToProps = (dispatch) => {
// }

export default connect(mapStateToProps, FlyerActions)(FlyerStackEditor);
