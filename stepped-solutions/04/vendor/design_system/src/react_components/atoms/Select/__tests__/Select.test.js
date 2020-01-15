import React from 'react';
import { shallow } from 'enzyme';
import Select from '..';

describe('Select', () => {
  const defaultProps = {
    options: [{ value: '1', label: 'one' }, { value: '2', label: 'two' }]
  };

  const component = props => {
    const combinedProps = { ...defaultProps, ...props };
    return <Select {...combinedProps} />;
  };

  const instance = props => shallow(component(props));

  it('renders a react select', () => {
    const select = instance();
    expect(select.find('Select')).toHaveLength(1);
  });

  it('has the ds-atom-select class', () => {
    const reactSelect = instance().find('Select');
    expect(reactSelect.hasClass('ds-atom-vendor-select-input-normal')).toBeTruthy();
  });

  it('on error, has the error class', () => {
    const reactSelect = instance({ error: true }).find('Select');
    expect(reactSelect.hasClass('error')).toBeTruthy();
  });
});
