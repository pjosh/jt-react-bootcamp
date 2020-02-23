import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs/react';
import BlankSlate from 'DesignSystemComponents/organisms/BlankSlate';
import imageDefaultRoute from 'DesignSystemImages/no-chats.png';

const storyFunc = () => (
  <BlankSlate
    buttonLabel={text('buttonLabel', 'Label', 'BlankSlate')}
    className={text('className', '', 'BlankSlate')}
    explanation={text(
      'explanation',
      'Click below to publish an opening and find matching candidates to talk to and hire.',
      'BlankSlate'
    )}
    imageRoute={text('imageRoute', imageDefaultRoute, 'BlankSlate')}
    onSelect={action('onSelect', () => {}, 'BlankSlate')}
    title={text('title', 'No conversations yet', 'BlankSlate')}
  />
);

export default {
  title: 'BlankSlate',
  text: `
  # BlankSlate
  ## Zeplin
  * [BlankSlate](https://zpl.io/bAGjRgx)
  
  ## Notes
  For empty states.

  By default imageRoute shows a bubbles image but you can pass any other route to show a different image.
  Or if you don't want to render an image, or display the image as background-image in a div, you can pass imageRoute= 'empty'.
    `,
  render: storyFunc
};
