import React, { Component, PropTypes } from 'react';
import Widget from './Widget';


class ImageWidget extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    id: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    editing: PropTypes.bool,
    openWidgetEdit: PropTypes.func.isRequired,
    closeWidgetEdit: PropTypes.func.isRequired,
    deleteWidget: PropTypes.func.isRequired,
    saveWidget: PropTypes.func.isRequired,
    showAddingPanel: PropTypes.func.isRequired,

    styleSettings: PropTypes.shape({
      background: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
      font: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
      theme: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
      color: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
    }),
  }

  render() {
    const { image, title, id, index, editing, styleSettings,
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
        styleClasses={'image-widget'}
        styleSettings={styleSettings}
      >

        {!editing ?
          <div className={`widget-wrapper ${editing ? 'widget-content-hidden' : ''}`}>
            <div className="widget-content">
              { title ? <h2>{title}</h2> : null }
              <p>{image}</p>
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
                image: <input
                  type="text"
                  ref={(input) => { this.imageInput = input; }}
                  defaultValue={image}
                />
              </div>
              <button
                onClick={() => {
                  saveWidget(id, {
                    title: this.titleInput.value,
                    image: this.imageInput.value,
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

export default ImageWidget;

