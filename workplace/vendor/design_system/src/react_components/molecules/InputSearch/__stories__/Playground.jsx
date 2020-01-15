import React from 'react';
import { text, boolean, array } from '@storybook/addon-knobs/react';
import InputSearch from 'DesignSystemComponents/molecules/InputSearch';
// eslint-disable-next-line import/extensions
import './style.less';

const storyFunc = () => (
  <InputSearch
    className={text('className', '', 'Input Search')}
    error={boolean('error', false, 'Input Search')}
    placeholder={text('placeholder', 'Search', 'Input Search')}
    suggestions={array(
      'suggestions',
      [
        'Abibliophobia',
        'Bumfuzzle',
        'Cattywampus',
        'Gardyloo',
        'Taradiddle',
        'Snickersnee',
        'Widdershins',
        'Collywobbles',
        'Gubbins',
        'Bumbershoot'
      ],
      'Input Search'
    )}
  />
);

export default {
  title: 'Input search',
  render: storyFunc,
  text: `
  # Input search
  ## Zeplin
  * [Input search](https://zpl.io/2vB13Er)
  
  ## Notes
  You can modify its style passing a *className* prop.
  `
};
