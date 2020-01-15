import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs/react';
import StackView from '../..';

const storyFunc = () => {
  const footer = [
    <button type="button" key="primary" className="ds-atom-btn-primary-normal">
      Primary
    </button>,
    <button type="button" key="secondary" className="ds-atom-btn-secondary-normal">
      Secondary
    </button>
  ];

  return (
    <StackView title={text('Title', 'Title goes here')} footer={footer} onClose={action('close')}>
      <h2 className="content-element">Components in the body</h2>
      <p className="content-element">Components in the body are OK!</p>
      <p className="content-element">
        <button type="button">Cool</button>
      </p>
    </StackView>
  );
};

export default {
  title: 'Full example',
  text: `
  Component defined in [Zeplin "Organisms 2"](https://app.zeplin.io/project/5a5e183d5fa02b465ba5593d/screen/5a5e190ac1c899a85f6b4fb4)

  Displayed with title, content and footer, as used in Workforce's
  [Request Action](https://app.zeplin.io/project/5975b31e3d26d962fdb42e1f/screen/5975b36f156db85b600191f7)
  and
  [Request Staff](https://app.zeplin.io/project/5975b31e3d26d962fdb42e1f/screen/5975c579e81b143cff90ec6c)
  `,
  render: storyFunc
};
