import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Button from 'DesignSystemComponents/atoms/Button';
import IconSvg from 'DesignSystemComponents/atoms/IconSvg';

export default class ConfirmModal extends React.PureComponent {
  static propTypes = {
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func.isRequired,
    showModal: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired,
    className: PropTypes.string,
    container: PropTypes.string,
    localSource: PropTypes.bool,
    title: PropTypes.string,
    subtitle: PropTypes.string
  };

  static defaultProps = {
    onCancel: () => {},
    className: '',
    container: '',
    localSource: false,
    subtitle: '',
    title: ''
  };

  componentDidMount() {
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', this.handleKeyDown, false);
  }

  componentWillUnmount() {
    document.body.removeAttribute('style');
    document.removeEventListener('keydown', this.handleKeyDown, false);
  }

  handleKeyDown = e => {
    const isEnter = e.keyCode === 13;
    const isEsc = e.keyCode === 27;
    if (isEnter) {
      e.preventDefault();
      this.handleSelect();
    }
    if (isEsc) {
      this.handleCancel();
    }
  };

  handleOverlayClose = e => {
    if (!this.modalContent || !this.modalContent.current.contains(e.target)) {
      e.preventDefault();
      this.handleCancel();
    }
  };

  showModal = () => {
    this.props.showModal();
  };

  hideModal = e => {
    if (e) {
      e.stopPropagation();
    }
    this.props.hideModal();
  };

  handleSelect = e => {
    this.props.hideModal(e);
    this.props.onConfirm();
  };

  handleCancel = e => {
    this.props.hideModal(e);
    if (this.props.onCancel) this.props.onCancel();
  };

  render() {
    const { title, subtitle } = this.props;
    const container = this.props.container
      ? document.querySelector(this.props.container)
      : document.body;

    return ReactDOM.createPortal(
      (
        <div
          className={`ds-org-modal-overlay ${this.props.className}`}
          onClick={this.handleOverlayClose}
          onKeyDown={this.handleOverlayClose}
          role="button"
          tabIndex={0}
        >
          <div className="ds-org-confirm-modal" ref={this.modalContent}>
            <button type="button" onClick={this.hideModal} className="ds-org-modal-close">
              <IconSvg
                className="ds-org-modal-close-icon"
                icon="cross"
                localSource={this.props.localSource}
              />
            </button>
            <div>
              <div className="ds-org-confirm-modal-header">{title}</div>
              <div className="ds-org-confirm-modal-text">{subtitle}</div>
              <div className="ds-org-confirm-modal-buttons">
                <Button onSelect={this.handleCancel} secondary>
                  Cancel
                </Button>
                <Button onSelect={this.handleSelect} className="ds-org-confirm-modal-right-button">
                  Confirm
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) || [],
      container
    );
  }
}
