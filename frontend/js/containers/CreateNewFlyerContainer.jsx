import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { createFlyer } from '../actions/flyer';

const CreateNewFlyer = props => (
  <div>
    {
      props.isCreating ?
        <div>
          Creating
        </div> :
        <div>
          Create new flyer
          <button onClick={() => { props.createFlyer(); }}>Create</button>
        </div>
    }
  </div>
);

CreateNewFlyer.propTypes = {
  createFlyer: PropTypes.func.isRequired,
  isCreating: PropTypes.bool.isRequired,
};

const mapStateToProps = state => (
  {
    isCreating: state.flyerInfo.isCreating,
  }
);

export default connect(mapStateToProps, { createFlyer })(CreateNewFlyer);
