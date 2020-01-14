import React from 'react';
import { action } from '@storybook/addon-actions';
import StackView from '../..';

const title = (
  <div>
    <button type="button">A component</button> can also be used
  </div>
);
const storyFunc = () => (
  <StackView title={title} onClose={action('close')}>
    <h2 className="content-element">Components in the body</h2>
    <p className="content-element">Components in the body are OK!</p>
    <p className="content-element">
      <button type="button">Cool</button>
    </p>
  </StackView>
);

export default {
  title: 'Rich title',
  text: `
  Component defined in [Zeplin "Organisms 2"](https://app.zeplin.io/project/5a5e183d5fa02b465ba5593d/screen/5a5e190ac1c899a85f6b4fb4)

  Shown with arbitrary components in the title.
  `,
  render: storyFunc
};
