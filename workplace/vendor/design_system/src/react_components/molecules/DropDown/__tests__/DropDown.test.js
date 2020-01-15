import React from 'react';
import { mount } from 'enzyme';
import DropDown from 'DesignSystemComponents/molecules/DropDown';
import DropDownCell from 'DesignSystemComponents/atoms/DropDownCell';
import Button from 'DesignSystemComponents/atoms/Button';

describe('Dropdown', () => {
  const defaultProps = {};
  const instance = props =>
    mount(
      <DropDown {...props}>
        <DropDownCell>
          <Button>Test</Button>
        </DropDownCell>
      </DropDown>
    );

  it('shows the DropDownCell', () => {
    const component = instance(defaultProps);

    expect(component.find('DropDownCell')).toHaveLength(1);
  });

  it('calls the function onClose when clicking on button inside dropdowncell', () => {
    const onClose = jest.fn();
    const event = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn()
    };
    const component = instance({ ...defaultProps, onClose });
    component.find('Button').simulate('click', event);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not call the function onClose when clicking on button inside dropdowncell and is multiple', () => {
    const onClose = jest.fn();
    const event = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn()
    };
    const component = instance({ ...defaultProps, onClose, multiple: true });
    component.find('Button').simulate('click', event);

    expect(onClose).toHaveBeenCalledTimes(0);
  });

  it('does not call the function onClose when clicking on button inside dropdowncell and has property closeOnClick on false', () => {
    const onClose = jest.fn();
    const event = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn()
    };
    const component = instance({ ...defaultProps, onClose, closeOnClick: false });
    component.find('Button').simulate('click', event);

    expect(onClose).toHaveBeenCalledTimes(0);
  });

  it('does not call the function onClose when clicking on button inside dropdowncell and has property closeOnClick on true but is multiple', () => {
    const onClose = jest.fn();
    const event = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn()
    };
    const component = instance({ ...defaultProps, onClose, closeOnClick: true, multiple: true });
    component.find('Button').simulate('click', event);

    expect(onClose).toHaveBeenCalledTimes(0);
  });

  it('does not call the function onClose when clicking on button inside dropdowncell and has property closeOnClick on false and is not multiple', () => {
    const onClose = jest.fn();
    const event = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn()
    };
    const component = instance({ ...defaultProps, onClose, closeOnClick: false, multiple: false });
    component.find('Button').simulate('click', event);

    expect(onClose).toHaveBeenCalledTimes(0);
  });
});
