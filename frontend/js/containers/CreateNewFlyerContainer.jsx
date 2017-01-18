import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { createFlyer } from '../actions/flyer';

const CreateNewFlyer = ({
  createFlyer, // eslint-disable-line no-shadow
  isCreating,
}) => (
  <div>
    {
      isCreating ?
        <div>
          Creating
        </div> :
        <div>
          Create new flyer
          <button onClick={createFlyer}>Create</button>
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
