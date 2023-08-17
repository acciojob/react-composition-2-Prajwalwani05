import React from 'react';


class Modal extends React.Component {
  render() {
    const { show, onClose, children } = this.props;

    if (!show) {
      return null;
    }

    return (
        <div className='model-overlay' onCanPlay={{onClose}}>
        <div className="model-dialog" onClick={(e)=>e.stopPropagation()}>
          <button className="model-close" onClick={onClose}>
            Close
          </button>
          <p className="model-p">{children}</p>
        </div>
        </div>
    );
  }
}

export default Modal;
