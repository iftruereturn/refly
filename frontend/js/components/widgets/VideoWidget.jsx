import React, { Component, PropTypes } from 'react';
import Widget from './Widget';


// eslint-disable-next-line react/prefer-stateless-function
class VideoWidget extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    videoUrl: PropTypes.string.isRequired,
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
    const { videoUrl, title, id, index, editing, styleSettings,
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
        styleClasses={'video-widget'}
        styleSettings={styleSettings}
      >

        {!editing ?
          <div className={`widget-wrapper ${editing ? 'widget-content-hidden' : ''}`}>
            <div className="widget-content">
              { title ? <h2>{title}</h2> : null }
              <p>{videoUrl}</p>
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
                videoUrl: <input
                  type="text"
                  ref={(input) => { this.videoUrlInput = input; }}
                  defaultValue={videoUrl}
                />
              </div>
              <button
                onClick={() => {
                  saveWidget(id, {
                    title: this.titleInput.value,
                    videoUrl: this.videoUrlInput.value,
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

export default VideoWidget;

