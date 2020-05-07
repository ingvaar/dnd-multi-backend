# React DnD Multi Backend Pipeline: HTML5 <-> Touch [![NPM Version][npm-image]][npm-url] [![dependencies Status][deps-image]][deps-url] [![devDependencies Status][deps-dev-image]][deps-dev-url]

[Try it here!](https://louisbrunner.github.io/dnd-multi-backend/examples/react-dnd-multi-backend.html)

This project is a backend pipeline compatible with [`react-dnd-multi-backend`](https://npmjs.org/package/react-dnd-multi-backend).

It starts by using the [React DnD HTML5 Backend](https://react-dnd.github.io/react-dnd/docs/backends/html5), but switches to the [React DnD Touch Backend](https://react-dnd.github.io/react-dnd/docs/backends/touch) if a touch event is triggered.
You application can smoothly use the nice HTML5 compatible backend and fallback on the Touch one on mobile devices!

## Installation

### NPM Installation

```sh
npm install rdnd-html5-to-touch
```

You can then `HTML5toTouch = require('rdnd-html5-to-touch')` or `import HTML5toTouch from 'rdnd-html5-to-touch'`.

### Browser Installation

Use the minified UMD build in the `dist` folder: https://www.jsdelivr.com/package/npm/rdnd-html5-to-touch?path=dist%2Fumd.

`rdnd-html5-to-touch.min.js` exports a global `window['rdnd-html5-to-touch']` when imported as a `<script>` tag.
This file also includes the `HTML5` and `Touch` backends, so no need to include them as well.

## Usage

```js
import { DndProvider } from 'react-dnd-multi-backend';
import HTML5toTouch from 'rdnd-html5-to-touch';
...
const App = () => {
  return (
    <DndProvider options={HTML5toTouch}>
      <Example />
    </DndProvider>
  );
};
```

## License

MIT, Copyright (c) 2020 Louis Brunner



[npm-image]: https://img.shields.io/npm/v/rdnd-html5-to-touch.svg
[npm-url]: https://npmjs.org/package/rdnd-html5-to-touch
[deps-image]: https://david-dm.org/louisbrunner/rdnd-html5-to-touch/status.svg
[deps-url]: https://david-dm.org/louisbrunner/rdnd-html5-to-touch
[deps-dev-image]: https://david-dm.org/louisbrunner/rdnd-html5-to-touch/dev-status.svg
[deps-dev-url]: https://david-dm.org/louisbrunner/rdnd-html5-to-touch?type=dev
