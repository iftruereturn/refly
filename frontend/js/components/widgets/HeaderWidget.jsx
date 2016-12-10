import React, { Component, PropTypes } from 'react';
import Widget from './Widget';


// eslint-disable-next-line react/prefer-stateless-function
class HeaderWidget extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    editing: PropTypes.bool,
    openWidgetEdit: PropTypes.func.isRequired,
    closeWidgetEdit: PropTypes.func.isRequired,
    deleteWidget: PropTypes.func.isRequired,
    saveWidget: PropTypes.func.isRequired,
    showAddingPanel: PropTypes.func.isRequired,
  }

  render() {
    const { text, title, id, index, editing,
      openWidgetEdit, closeWidgetEdit, deleteWidget, saveWidget, showAddingPanel } = this.props;

    return (
      <Widget
        id={id}
        index={index}
        editing={editing}
        openWidgetEdit={openWidgetEdit}
        closeWidgetEdit={closeWidgetEdit}
        deleteWidget={deleteWidget}
        saveWidget={saveWidget}
        showAddingPanel={showAddingPanel}
        styleClasses={'header-widget'}
      >

        {!editing ?
          <div className={`widget-wrapper ${editing ? 'widget-content-hidden' : ''}`}>
            <div className="widget-content">
              <h1>{title}</h1>
              { text ? <p>{text}</p> : null }
            </div>
          </div> :
          <div className={`widget-wrapper ${editing ? '' : 'widget-editor-hidden'}`}>
            <div className="widget-editor">
              <div>
                title: <input
                  type="text"
                  ref={(input) => { this.titleInput = input; }}
                  defaultValue={title}
                />
              </div>
              <div>
                text: <input
                  type="text"
                  ref={(input) => { this.textInput = input; }}
                  defaultValue={text}
                />
              </div>
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
          </div>
        }

      </Widget>
    );
  }
}

export default HeaderWidget;

