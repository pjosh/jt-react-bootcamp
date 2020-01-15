import React from 'react';
import { TabsPanel, Tab } from '..';

const storyFunc = () => (
  <TabsPanel>
    <Tab title="Tab 1">My tab</Tab>
    <Tab title="Tab 2" selected>
      Second One
    </Tab>
    <Tab title="Tab 3">Third content</Tab>
  </TabsPanel>
);

export default {
  title: 'Simple',
  render: storyFunc,
  text: `
  ## Zeplin
  * [Tab Bars](https://app.zeplin.io/project/5a5e183d5fa02b465ba5593d/screen/5a5e18fdd9c52bce0d368697)
  `
};
