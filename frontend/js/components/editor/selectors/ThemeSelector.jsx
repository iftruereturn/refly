import React, { PropTypes } from 'react';

const ThemeSelector = ({ themes, changeFlyerTheme }) => (
  <div>
    Theme:
    { themes.map((theme, i) => (
      <button
        key={i}
        className="selector-item"
        onClick={() => { changeFlyerTheme(theme.value); }}
      >
        {theme.name}
      </button>
    )) }
  </div>
);

ThemeSelector.propTypes = {
  themes: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types,
  changeFlyerTheme: PropTypes.func.isRequired,
};

export default ThemeSelector;
