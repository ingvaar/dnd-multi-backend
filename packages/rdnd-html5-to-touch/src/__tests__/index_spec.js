import * as Module from '../index';

import HTML5toTouch from '../HTML5toTouch';

describe('rdnd-html5-to-touch module', () => {
  test('exports correctly', () => {
    expect(Module.default).toBe(HTML5toTouch);
    expect(Module.HTML5toTouch).toBe(HTML5toTouch);
  });
});
