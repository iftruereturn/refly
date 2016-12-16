import React, { PropTypes } from 'react';

const BackgroundSelector = ({ backgrounds, changeFlyerBackground }) => (
  <div>
    Background:
    { backgrounds.map((background, i) => (
      <button
        key={i}
        className="selector-item"
        onClick={() => { changeFlyerBackground(background.value); }}
      >
        {background.name}
      </button>
    )) }
  </div>
);

BackgroundSelector.propTypes = {
  backgrounds: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types,
  changeFlyerBackground: PropTypes.func.isRequired,
};

export default BackgroundSelector;
