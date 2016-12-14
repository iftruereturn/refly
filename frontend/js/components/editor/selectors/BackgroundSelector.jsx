import React, { PropTypes } from 'react';

const BackgroundSelector = ({ backgrounds, changeFlyerBackground }) => (
  <div>
    BackgroundSelector
  </div>
);

BackgroundSelector.propTypes = {
  backgrounds: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types,
  changeFlyerBackground: PropTypes.func.isRequired,
};

export default BackgroundSelector;
