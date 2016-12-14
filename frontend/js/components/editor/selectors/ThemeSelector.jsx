import React, { PropTypes } from 'react';

const ThemeSelector = ({ themes, changeFlyerTheme }) => (
  <div>
    ThemeSelector
  </div>
);

ThemeSelector.propTypes = {
  themes: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types,
  changeFlyerTheme: PropTypes.func.isRequired,
};

export default ThemeSelector;
