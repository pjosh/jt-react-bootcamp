import React from 'react';
import PropTypes from 'prop-types';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs/react';
import Modals from '..';

class Demo extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    container: PropTypes.string,
    localSource: PropTypes.bool,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func.isRequired,
    showModal: PropTypes.func.isRequired
  };

  static defaultProps = {
    className: '',
    container: '',
    localSource: false,
    onCancel: () => {},
    subtitle: '',
    title: ''
  };

  state = {
    confirmModal: ''
  };

  handleShowModal = () => {
    this.setState({ confirmModal: this.buildConfirmModal() });
  };

  handleHideModal = () => {
    this.setState({ confirmModal: '' });
  };

  buildConfirmModal() {
    const {
      className,
      showModal,
      container,
      onConfirm,
      onCancel,
      localSource,
      title,
      subtitle
    } = this.props;

    return (
      <Modals
        showModal={showModal}
        hideModal={this.handleHideModal}
        onConfirm={onConfirm}
        onCancel={onCancel}
        title={title}
        subtitle={subtitle}
        className={className}
        container={container}
        localSource={localSource}
      />
    );
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleShowModal}>
          Click to show
        </button>
        {this.state.confirmModal}
      </div>
    );
  }
}

const storyFunc = () => {
  const onCancel = action('onCancel', () => {});
  const onConfirm = action('onConfirm', () => {});
  const showModal = action('showModal', () => {});
  const container = text('title:', '#story-root');
  const title = text('title:', 'Modal title');
  const localSource = boolean('localSource:', false);
  const subtitle = text(
    'subtitle:',
    'We recommend you to send at least 5 job offers in order to increase your chances of find the perfect employee.'
  );
  const className = text('ClassName:', '');

  const props = {
    onCancel,
    onConfirm,
    showModal,
    className,
    container,
    localSource,
    title,
    subtitle
  };
  return <Demo {...props} />;
};

export default {
  title: 'Confirm modal',
  render: storyFunc,
  text: `
  ## Zeplin
  * [Modals](https://zpl.io/2Gz7jD3)`
};
