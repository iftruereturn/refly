import React, { PropTypes, Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class ColorSelector extends Component {
  static propTypes = {
    colors: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types,
    changeFlyerColor: PropTypes.func.isRequired,
  }

/*
  onClickHandler(e) {
    let target = e.target;

    while (target !== window) {
      if (target.classList.contains('selector-item')) {
        this.props.changeFlyerColor(target.dataset.value);
        return;
      }

      target = target.parentNode;
    }
  }
*/

  render() {
    const { colors, changeFlyerColor } = this.props;

    return (
      <div>
        Color:
        { colors.map((color, i) => (
          <button
            key={i}
            className="selector-item"
            onClick={() => { changeFlyerColor(color.value); }}
          >
            {color.name}
          </button>
        )) }
      </div>
    );
  }
}


export default ColorSelector;
