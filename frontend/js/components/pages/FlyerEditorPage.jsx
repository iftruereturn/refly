import React, { Component } from 'react';
import TextWidget from '../widgets/TextWidget';

export default class FlyerEditorPage extends Component {
  static propTypes = {
    addWidget: React.PropTypes.func.isRequired,
    /* eslint "react/forbid-prop-types": 0 */
    flyerStack: React.PropTypes.array.isRequired,
  }

  render() {
    const { addWidget,
      flyerStack } = this.props;

    const flyer = flyerStack.map((widget, index) => {
      switch (widget.type) {
        case 'TextWidget':
          return <TextWidget key={index} title={widget.title} text={widget.text} />;

        default:
          return null;
      }
    });

    return (
      <div>
        <div>
          {flyer}
        </div>
        <button onClick={() => addWidget()}>Add Widget</button>
      </div>
    );
  }
}
