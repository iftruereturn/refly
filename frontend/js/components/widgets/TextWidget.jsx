import React from 'react';

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

const TextWidget = ({ title, text }) => (
  <div>
    <p>{title}</p>
    <p>{text}</p>
  </div>
);

TextWidget.propTypes = {
  title: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
};

export default TextWidget;
