import React from 'react';
import { connect } from 'react-redux';
import * as FlyerActions from '../actions/FlyerActions';
import FlyerEditorPage from '../components/pages/FlyerEditorPage';

const FlyerEditor = props => (
  <FlyerEditorPage {...props} />
);

const mapStateToProps = state => (
  { ...state.flyerInfo,
    flyerStack: state.flyerStack }
);

// const mapDispatchToProps = (dispatch) => {
// }

export default connect(mapStateToProps, FlyerActions)(FlyerEditor);
