import React from 'react';
import { shallow } from 'enzyme';
import DropDown from 'DesignSystemComponents/molecules/DropDown';
import DropDownCell from 'DesignSystemComponents/atoms/DropDownCell';
import Button from 'DesignSystemComponents/atoms/Button';
import OptionPicker from '..';

describe('OptionPicker', () => {
  const dropDown = (
    <DropDown>
      <DropDownCell>Test</DropDownCell>
    </DropDown>
  );

  it('shows the ActionButton', () => {
    const component = shallow(<OptionPicker title="title" dropDown={dropDown} />);
    expect(component.find('ActionButton')).toHaveLength(1);
  });

  it('shows the custom Button launcher', () => {
    const component = shallow(
      <OptionPicker title="title" dropDown={dropDown}>
        <Button>Text</Button>
      </OptionPicker>
    );
    expect(component.find('Button')).toHaveLength(1);
  });

  it('creates the dropdown if it is open by default', () => {
    const component = shallow(<OptionPicker open title="title" dropDown={dropDown} />);
    expect(component.find('DropDown')).toHaveLength(1);
  });

  it('opens the dropdown clicking on the option picker', () => {
    const component = shallow(<OptionPicker title="title" dropDown={dropDown} />);
    const fakeEvent = { preventDefault: () => {}, stopPropagation: () => {} };
    component.find('ActionButton').simulate('click', fakeEvent);
    expect(component.instance().state.open).toBeTruthy();
  });
});
