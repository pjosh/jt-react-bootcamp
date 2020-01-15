import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';

import Playground from './Playground';

const fullStory = story => story.render();

storiesOf('Molecules/InputSearch', module)
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      header: false,
      inline: true,
      text: Playground.text
    })
  )
  .add(Playground.title, () => fullStory(Playground));
