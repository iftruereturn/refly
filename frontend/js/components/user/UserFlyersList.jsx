import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const UserFlyersList = props => (
  <ul>
    {
      props.userFlyersList.map(flyerIdItem => (
        <li key={flyerIdItem._id}>
          <Link to={`/editor/${flyerIdItem._id}`}>
            {flyerIdItem._id}
          </Link>
        </li>
        )
      )
    }
  </ul>
);

UserFlyersList.propTypes = {
  userFlyersList: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default UserFlyersList;
