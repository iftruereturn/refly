import React, { PropTypes } from 'react';

const FontSelector = ({ fonts, changeFlyerFont }) => (
  <div>
    Font:
    { fonts && fonts.map((font, i) => (
      <button
        key={i}
        className="selector-item"
        onClick={() => { changeFlyerFont(font.value); }}
      >
        {font.name}
      </button>
    )) }
  </div>
);

FontSelector.propTypes = {
  fonts: PropTypes.array, // eslint-disable-line react/forbid-prop-types,
  changeFlyerFont: PropTypes.func.isRequired,
};

export default FontSelector;
