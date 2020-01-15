import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import dynamic from './dynamic';
import fixed from './fixed';

const fullStory = story => story.render();

storiesOf('Organisms/SnackBar', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add(dynamic.title, () => fullStory(dynamic), {
    info: { inline: true, header: false, text: dynamic.text }
  })
  .add(fixed.title, () => fullStory(fixed), {
    info: { inline: true, header: false, text: fixed.text }
  });
