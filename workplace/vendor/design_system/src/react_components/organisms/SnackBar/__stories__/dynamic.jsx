import React from 'react';
import PropTypes from 'prop-types';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs/react';
import SnackBar from '..';

class Demo extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
    error: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    onDismiss: PropTypes.func.isRequired
  };

  state = {
    snackBar: []
  };

  handleShowSnack = () => {
    this.setState({ snackBar: this.buildSnackBar() });
  };

  buildSnackBar() {
    const { className, content, error, title, onDismiss } = this.props;
    return (
      <SnackBar
        key={Date.now()}
        title={title}
        error={error}
        className={className}
        onDismiss={onDismiss}
      >
        {content}
      </SnackBar>
    );
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleShowSnack}>
          Click to show
        </button>
        {this.state.snackBar}
      </div>
    );
  }
}

const storyFunc = () => {
  const onDismiss = action('onDismiss');
  const title = text('Title:', 'SnackBar at your service');
  const error = boolean('Error', false);
  const content = text('Content:', 'We did what you asked us to do and had great success!');
  const className = text('Class Name:', '');
  return <Demo {...{ onDismiss, title, error, className, content }} />;
};

export default {
  title: 'Dynamic',
  render: storyFunc,
  text: `
  ## Zeplin
  * [SnackBar](https://app.zeplin.io/project/5a5e183d5fa02b465ba5593d/screen/5a5e190a557800ccf7cdcaf4)
  ## Dependencies

  To use animations we depend on \`CSSTransitionGroup\`:
  \`\`\`
  yarn add react-transition-group@1.x
  \`\`\`
  `
};
