import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import ConfirmModal from '..';

/* eslint-env jest */
ReactDOM.createPortal = node => node;
describe('<ConfirmModal />', () => {
  const defaultProps = {
    onConfirm: () => {},
    onCancel: () => {},
    showModal: () => {},
    hideModal: () => {},
    title: 'The title modal',
    subtitle: 'The subtitle modal'
  };

  const instance = props => {
    const combinedProps = { ...defaultProps, ...props };
    return shallow(<ConfirmModal {...combinedProps} />);
  };

  it('exists', () => {
    const container = instance({});

    expect(container.find('.ds-org-confirm-modal')).toHaveLength(1);
  });

  it('renders a title if passed as prop with The title modal as inner text', () => {
    const container = instance({});

    expect(container.find('.ds-org-confirm-modal-header')).toHaveLength(1);
    expect(container.find('.ds-org-confirm-modal-header').text()).toEqual('The title modal');
  });

  it('renders a subtitle if passed as prop with The subtitle modal as inner text', () => {
    const container = instance({});

    expect(container.find('.ds-org-confirm-modal-text')).toHaveLength(1);
    expect(container.find('.ds-org-confirm-modal-text').text()).toEqual('The subtitle modal');
  });

  it('renders a close button with an icon inside', () => {
    const container = instance({});

    expect(container.find('button.ds-org-modal-close')).toHaveLength(1);
    expect(container.find('button.ds-org-modal-close').text()).toEqual('<IconSvg />');
  });

  it('renders two buttons, the secondary button to cancel and another one to confirm', () => {
    const container = instance({});
    const cancelButton = container.find('.ds-org-confirm-modal-buttons Button').at(0);
    const confirmButton = container.find('.ds-org-confirm-modal-buttons Button').at(1);

    expect(container.find('.ds-org-confirm-modal-buttons Button')).toHaveLength(2);
    expect(cancelButton.props().secondary).toBeTruthy();
    expect(cancelButton.props().children).toEqual('Cancel');
    expect(confirmButton.props().secondary).toBeFalsy();
    expect(confirmButton.props().children).toEqual('Confirm');
  });

  it('calls onConfirm when enter key is pressed', () => {
    const onConfirmMock = jest.fn();
    const eventMap = {
      keydown: null
    };

    document.addEventListener = jest.fn((event, callback) => {
      eventMap[event] = callback;
    });

    const container = instance({ onConfirm: onConfirmMock });

    eventMap.keydown({ keyCode: 13, preventDefault: () => {} });
    container.simulate('keydown', { keyCode: 13, preventDefault: () => {} });

    expect(onConfirmMock).toHaveBeenCalled();
  });

  it('calls onCancel when esc key is pressed', () => {
    const onCancelMock = jest.fn();
    const eventMap = {
      keydown: null
    };

    document.addEventListener = jest.fn((event, callback) => {
      eventMap[event] = callback;
    });

    const container = instance({ onCancel: onCancelMock });

    eventMap.keydown({ keyCode: 27, preventDefault: () => {} });
    container.simulate('keydown', { keyCode: 27, preventDefault: () => {} });

    expect(onCancelMock).toHaveBeenCalled();
  });
});
