import React from 'react';
import { shallow } from 'enzyme';
import { Tab } from '..';

describe('Tab', () => {
  const component = () => {
    const title = 'Tab name';
    const content = (
      <div className="tab-content">
        <h4>Some title</h4>
        <p>
          Elige perfiles de nuestra base de trabajadores pre-seleccionados y entrevistados, con
          videos de presentación y reseñas de sus empresas anteriores.
        </p>
      </div>
    );
    return <Tab title={title}>{content}</Tab>;
  };

  const instance = () => shallow(component());

  it('renders a div with the class "ds-side-panel-content"', () => {
    const tab = instance();
    expect(tab.hasClass('ds-side-panel-content')).toBeTruthy();
  });

  it('renders the content', () => {
    const content = instance().childAt(0);
    expect(content.hasClass('tab-content')).toBeTruthy();
  });
});
