import { configure } from '@storybook/react';

function loadStories() {
  const req = require.context('../src/react_components', true, /.*\/__stories__\/index.jsx?$/)
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
