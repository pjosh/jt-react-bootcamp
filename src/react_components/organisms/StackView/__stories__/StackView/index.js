import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';

import basic from './basic';
import full from './full';
import richTitle from './richTitle';

const fullStory = story => story.render();

storiesOf('Organisms/StackView', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo())
  .add(basic.title, () => fullStory(basic), {
    info: { inline: true, header: false, text: basic.text }
  })
  .add(richTitle.title, () => fullStory(richTitle), {
    info: { inline: true, header: false, text: richTitle.text }
  })
  .add(full.title, () => fullStory(full), {
    info: { inline: true, header: false, text: full.text }
  });
