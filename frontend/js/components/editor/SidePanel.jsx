import React, { PropTypes } from 'react';

import BackgroundSelector from './selectors/BackgroundSelector';
import ColorSelector from './selectors/ColorSelector';
import FontSelector from './selectors/FontSelector';
import ThemeSelector from './selectors/ThemeSelector';

const SidePanel = ({
  themes, backgrounds, fonts, colors,
  changeFlyerBackground, changeFlyerFont, changeFlyerTheme, changeFlyerColor,
}) => (
  <div>
    Side panel
    <ColorSelector colors={colors} changeFlyerColor={changeFlyerColor} />
    <FontSelector fonts={fonts} changeFlyerFont={changeFlyerFont} />
    <ThemeSelector themes={themes} changeFlyerTheme={changeFlyerTheme} />
    <BackgroundSelector backgrounds={backgrounds} changeFlyerBackground={changeFlyerBackground} />
  </div>
);

SidePanel.propTypes = {
  themes: PropTypes.array, // eslint-disable-line react/forbid-prop-types,
  changeFlyerTheme: PropTypes.func.isRequired,

  backgrounds: PropTypes.array, // eslint-disable-line react/forbid-prop-types,
  changeFlyerBackground: PropTypes.func.isRequired,

  fonts: PropTypes.array, // eslint-disable-line react/forbid-prop-types,
  changeFlyerFont: PropTypes.func.isRequired,

  colors: PropTypes.array, // eslint-disable-line react/forbid-prop-types,
  changeFlyerColor: PropTypes.func.isRequired,
};

export default SidePanel;
