import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { createFlyer } from '../actions/FlyerActions';

const CreateNewFlyer = props => (
  <div>
    Create new flyer
    <button onClick={() => { props.createFlyer(); }}>Create</button>
  </div>
);

CreateNewFlyer.propTypes = {
  createFlyer: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  { flyerInfo: state.flyerInfo,
    flyerStack: state.flyerStack,
    flyerPossibleSettings: state.flyerPossibleSettings }
);

export default connect(mapStateToProps, { createFlyer })(CreateNewFlyer);
