import React, { PropTypes } from 'react';
import Widget from './Widget';

/*
export default class TextWidget extends Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
  }

  render() {
    const { text, title } = this.props;

    return (
      <div>
        <p>{title}</p>
        <p>{text}</p>
      </div>
    );
  }
}
*/

const TextWidget = ({ title, text, id, index, moveWidget }) => (
  <Widget id={id} index={index} moveWidget={moveWidget}>
    <h2>{title}</h2>
    <p>{text}</p>
  </Widget>
);

TextWidget.propTypes = {
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  moveWidget: PropTypes.func.isRequired,
};

export default TextWidget;
