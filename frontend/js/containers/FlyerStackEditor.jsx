import React from 'react';
import { connect } from 'react-redux';

import * as FlyerActions from '../actions/FlyerActions';
import FlyerStackComponent from '../components/FlyerStackComponent';

const FlyerStackEditor = props => (
  <FlyerStackComponent {...props} />
);

const mapStateToProps = state => (
  { ...state.flyerInfo,
    flyerStack: state.flyerStack }
);

// const mapDispatchToProps = (dispatch) => {
// }

export default connect(mapStateToProps, FlyerActions)(FlyerStackEditor);
