import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs/react';
import StackView from '../..';

const storyFunc = () => (
  <StackView title={text('Title', 'Title goes here')} onClose={action('close')}>
    This is the content
  </StackView>
);

export default {
  title: 'Basic example',
  text: `
  Component defined in [Zeplin "Organisms 2"](https://app.zeplin.io/project/5a5e183d5fa02b465ba5593d/screen/5a5e190ac1c899a85f6b4fb4)

  Here it is not using the footer, as seen in Workforce's [Staff profile](https://app.zeplin.io/project/5975b31e3d26d962fdb42e1f/screen/5975b366e3f1881a69fa0805)
  `,
  render: storyFunc
};
