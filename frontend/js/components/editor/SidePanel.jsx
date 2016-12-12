import React, { PropTypes } from 'react';

import BackgroundSelector from './selectors/BackgroundSelector';
import ColorSelector from './selectors/ColorSelector';
import FontSelector from './selectors/FontSelector';
import ThemeSelector from './selectors/ThemeSelector';


const SidePanel = ({ themes, backgrounds, colors, fonts }) => (
  <div>
    Side panel
    <BackgroundSelector backgrounds={backgrounds} />
    <ColorSelector colors={colors} />
    <FontSelector fonts={fonts} />
    <ThemeSelector themes={themes} />
  </div>
);

SidePanel.propTypes = {
  themes: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types,
  backgrounds: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types,
  colors: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types,
  fonts: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types,
};

export default SidePanel;
