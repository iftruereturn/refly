import React, { PropTypes } from 'react';

const FontSelector = ({ fonts, changeFlyerFont }) => (
  <div>
    FontSelector
  </div>
);

FontSelector.propTypes = {
  fonts: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types,
  changeFlyerFont: PropTypes.func.isRequired,
};

export default FontSelector;
