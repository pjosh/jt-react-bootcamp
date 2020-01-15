import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';

import basic from './basic';
import customLauncher from './customLauncher';

const fullStory = story => story.render();

storiesOf('Molecules/OptionPicker', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo())
  .add(basic.title, () => fullStory(basic), {
    info: { inline: true, header: false, text: basic.text }
  })
  .add(customLauncher.title, () => fullStory(customLauncher), {
    info: { inline: true, header: false, text: customLauncher.text }
  });
