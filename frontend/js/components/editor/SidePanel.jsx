import React, { PropTypes } from 'react';

// import BackgroundSelector from './selectors/BackgroundSelector';
import ColorSelector from './selectors/ColorSelector';
// import FontSelector from './selectors/FontSelector';
// import ThemeSelector from './selectors/ThemeSelector';


const SidePanel = ({
  /* themes, backgrounds, fonts, */ colors,
  /* changeFlyerBackground,  changeFlyerFont, changeFlyerTheme, */ changeFlyerColor,
}) => (
  <div>
    Side panel
    <ColorSelector colors={colors} changeFlyerColor={changeFlyerColor} />
  </div>
);

SidePanel.propTypes = {
  /* themes: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types,
  backgrounds: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types,
  fonts: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types,
  changeFlyerTheme: PropTypes.func.isRequired,
  changeFlyerBackground: PropTypes.func.isRequired,
  changeFlyerFont: PropTypes.func.isRequired, */
  colors: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types,
  changeFlyerColor: PropTypes.func.isRequired,
};

export default SidePanel;
