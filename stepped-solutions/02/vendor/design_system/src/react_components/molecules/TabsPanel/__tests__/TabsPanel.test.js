import React from 'react';
import { shallow } from 'enzyme';
import { TabsPanel, Tab } from '..';

describe('TabsPanel', () => {
  const component = props => (
    <TabsPanel {...props}>
      <Tab title="Tab 1">Hello 1</Tab>
      <Tab title="Tab 2" selected>
        <div>
          <h4>Some Title</h4>
          <p>
            Elige perfiles de nuestra base de trabajadores pre-seleccionados y entrevistados, con
            videos de presentación y reseñas de sus empresas anteriores.
          </p>
        </div>
      </Tab>
    </TabsPanel>
  );

  const instance = props => shallow(component(props));

  it('renders a container with custom classes', () => {
    const panel = instance({ className: 'my-own-styles' });
    expect(panel.hasClass('my-own-styles')).toBeTruthy();
  });

  it('renders a nav bar', () => {
    const panel = instance();
    expect(panel.find('nav')).toHaveLength(1);
  });

  it('the nav has the atom-tab-menu class', () => {
    const nav = instance().find('nav');
    expect(nav.hasClass('ds-atom-tab-menu')).toBeTruthy();
  });

  it('the nav has an item for each tab', () => {
    const nav = instance().find('nav');
    expect(nav.children()).toHaveLength(2);
  });

  it('the nav items are buttons', () => {
    const nav = instance().find('nav');
    expect(nav.childAt(1).find('button')).toHaveLength(1);
  });

  it('the nav items has the atom-tab class', () => {
    const nav = instance().find('nav');
    expect(nav.childAt(1).hasClass('ds-atom-tab')).toBeTruthy();
  });

  it('the nav item shows tab title', () => {
    const nav = instance().find('nav');
    expect(nav.childAt(1).text()).toEqual('Tab 2');
  });

  it('add the class selected to the nav item for the selected tab', () => {
    const nav = instance().find('nav');
    expect(nav.childAt(1).hasClass('selected')).toBeTruthy();
  });

  it('if no tab is selected, defaults to the first one', () => {
    const noSelected = (
      <TabsPanel>
        <Tab title="t">Content</Tab>
      </TabsPanel>
    );

    const nav = shallow(noSelected).find('nav');
    expect(nav.childAt(0).hasClass('selected')).toBeTruthy();
  });

  it('show the content of the selected tab', () => {
    const content = instance()
      .children()
      .last()
      .dive();
    expect(content.text()).toContain('nuestra base de trabajadores');
  });

  it('click in in a nav item changes the active tab', () => {
    const panel = instance();
    const navButton = panel.find('nav').childAt(0);
    navButton.simulate('click');

    const content = panel
      .children()
      .last()
      .dive();
    expect(content.text()).toContain('Hello');
  });
});
