import React, { Component, PropTypes } from 'react';
import Widget from './Widget';


class TextWidget extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    editing: PropTypes.bool,
    moveWidget: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
    openWidgetEdit: PropTypes.func.isRequired,
    closeWidgetEdit: PropTypes.func.isRequired,
    deleteWidget: PropTypes.func.isRequired,
    saveWidget: PropTypes.func.isRequired,
  }

  render() {
    const { text, title, id, index, editing,
      moveWidget, openWidgetEdit, closeWidgetEdit, deleteWidget, saveWidget } = this.props;

    return (
      <Widget
        id={id}
        index={index}
        editing={editing}
        moveWidget={moveWidget}
        openWidgetEdit={openWidgetEdit}
        closeWidgetEdit={closeWidgetEdit}
        deleteWidget={deleteWidget}
        saveWidget={saveWidget}
      >

        { !editing ?
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div> :
          <div>
            title: <input type="text" ref={(input) => { this.titleInput = input; }} />
            text: <input type="text" ref={(input) => { this.textInput = input; }} />
            <button
              onClick={() => {
                saveWidget(id, {
                  title: this.titleInput.value,
                  text: this.textInput.value,
                });
              }}
            >
              Save
            </button>
          </div>
        }

      </Widget>
    );
  }
}

export default TextWidget;

