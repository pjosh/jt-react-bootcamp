import React from 'react';
import { storiesOf } from '@storybook/react';
import fullStory from 'DesignSystemComponents/__stories__/helpers';
import icons from './icons';
import atoms2 from './atoms2';
import atoms4 from './atoms4';
import atoms5 from './atoms5';
import atoms6 from './atoms6';

// eslint-disable-next-line import/extensions
import './style.less';

const stories = storiesOf('Atoms/Showcases', module);

const renderInDiv = story => {
  const render = () => <div>{story.render()}</div>;
  render.displayName = 'wrapperShowcase';
  return render;
};

stories.add('Icons', renderInDiv(icons));
stories.add('Atoms 2', renderInDiv(atoms2));
stories.add('Atoms 4', renderInDiv(atoms4));
stories.add('Atoms 5', renderInDiv(atoms5));
stories.add('Atoms 6', fullStory(atoms6, { full: false }));
