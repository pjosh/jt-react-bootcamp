import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs/react';
import SnackBar from '..';

const storyFunc = () => {
  const onDismiss = action('onDismiss');
  const title = text('Title:', 'Everything is A-OK');
  const error = boolean('Error', false);
  const className = text('Class Name:', '');
  const content = text('Content:', 'We did what you asked us to do and had great success!');
  return (
    <SnackBar.Fixed title={title} error={error} className={className} onDismiss={onDismiss}>
      {content}
    </SnackBar.Fixed>
  );
};

export default {
  title: 'Fixed',
  render: storyFunc,
  text: `
  This *SnackBar* does not animate. It is static.

  ## Zeplin
  * [SnackBar](https://app.zeplin.io/project/5a5e183d5fa02b465ba5593d/screen/5a5e190a557800ccf7cdcaf4)
  `
};
