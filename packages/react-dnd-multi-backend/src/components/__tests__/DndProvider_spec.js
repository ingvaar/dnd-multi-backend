import React, { useContext } from 'react';
import { mount } from 'enzyme';

import { DndProvider, PreviewPortalContext } from '../DndProvider';

describe('DndProvider component', () => {
  const createComponent = (child) => {
    return mount(
      <DndProvider options={{backends: [{id: 'abc', backend: () => {}}]}}>
        {child}
      </DndProvider>
    );
  };

  test('contexts have sensible defaults', () => {
    const Child = () => {
      const portal = useContext(PreviewPortalContext);
      expect(portal).toBeNull();
      return null;
    };
    mount(<Child />);
  });

  test('can access both contexts', () => {
    const spy = jest.fn();

    const Child = () => {
      const portal = useContext(PreviewPortalContext);
      spy(portal);
      return null;
    };
    const component = createComponent(<Child />);
    component.setProps({force: true}); // Force re-render
    component.update();

    expect(spy.mock.calls.length).toBeGreaterThanOrEqual(2);
    expect(spy).toHaveBeenNthCalledWith(1, undefined);
    for (let i = 1; i < spy.mock.calls.length; ++i) {
      expect(spy).toHaveBeenNthCalledWith(i + 1, expect.any(HTMLElement));
    }
  });
});
