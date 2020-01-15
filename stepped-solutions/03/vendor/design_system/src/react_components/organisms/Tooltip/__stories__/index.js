import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';

import simple from './simple';
import full from './full';

const tooltipContainer = document.createElement('div');
tooltipContainer.setAttribute('id', 'ds-tooltip-container');
document.body.append(tooltipContainer);

const fullStory = story => story.render();

storiesOf('Organisms/Tooltip', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo())
  .add(simple.title, () => fullStory(simple), {
    info: { inline: true, header: false, text: simple.text }
  })
  .add(full.title, () => fullStory(full), {
    info: { inline: true, header: false, text: full.text }
  });
