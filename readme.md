# React Interactive Hooks

`react-interactive-hooks` is a collection of React hooks designed for easy and
efficient handling of DOM events with optional debouncing and throttling. It
aims to improve performance and user experience in React applications by
providing a straightforward way to manage event listeners.

## Features

- **Seamless React Integration**: Works smoothly with React 17 and React 18.
- **Performance Optimization**: Debounce and throttle event handlers to reduce
  unnecessary renders and function executions.
- **Comprehensive Event Support**: From mouse and keyboard events to touch and
  custom events, handle a wide array of interactions.
- **Flexibility and Ease of Use**: Simple API that can be easily integrated into
  any React component.

## Installation

You can install `react-interactive-hooks` using npm or yarn:

```bash
npm install react-interactive-hooks --save
```

Or:

```bash
yarn add react-interactive-hooks
```

Make sure you have React installed in your project, as this package uses React
as a peer dependency.

## Usage

`react-interactive-hooks` provides hooks for various DOM events, including
click, scroll, mouse move, and more. Here are some examples to get you started:

### Handling Click Events

Use `useOnClick` to handle click events:

```javascript
import React from 'react';
import { useOnClick } from 'react-interactive-hooks';

function App() {
  useOnClick(() => console.log('Clicked!'));

  return <div>Click anywhere on this page</div>;
}
```

### Debouncing Scroll Events

Improve performance by debouncing scroll events with `useOnScroll`:

```javascript
import React from 'react';
import { useOnScroll } from 'react-interactive-hooks';

function ScrollComponent() {
  useOnScroll(() => console.log('Scrolling...'), { debounceDelay: 200 });

  return (
    <div style={{ overflowY: 'scroll', height: '100vh' }}>Scroll down</div>
  );
}
```

### Throttling Mouse Move Events

Throttle mouse move events to limit the number of handler calls:

```javascript
import React from 'react';
import { useOnMouseMove } from 'react-interactive-hooks';

function MouseMoveComponent() {
  useOnMouseMove(() => console.log('Mouse moving...'), {
    throttleInterval: 100,
  });

  return <div>Move your mouse over this text</div>;
}
```

### Custom Event Handling

Handle custom events using `useEventHandler`:

```javascript
import React, { useEffect } from 'react';
import { useEventHandler } from 'react-interactive-hooks';

function CustomEventComponent() {
  const customEventHandler = (event) =>
    console.log('Custom event:', event.detail);

  useEffect(() => {
    window.addEventListener('customEvent', customEventHandler);
    return () => {
      window.removeEventListener('customEvent', customEventHandler);
    };
  }, []);

  useEventHandler('customEvent', customEventHandler);

  return <div>Custom event handling</div>;
}
```

## Contributing

Contributions are welcome! Please refer to the
[contributing guidelines](https://github.com/m-alhoomaidi/react-interactive-hooks/CONTRIBUTING.md)
for more information.

## Reporting Issues

Found a bug or have a feature request? Please report it on the
[GitHub issue tracker](https://github.com/m-alhoomaidi/react-interactive-hooks/issues).

## License

`react-interactive-hooks` is licensed under the MIT License. See the
[LICENSE](https://github.com/m-alhoomaidi/react-interactive-hooks/LICENSE) file
for more details.

## Author

Developed by Mohammed Alhomaidi. For more information and other projects, please
visit [my GitHub profile](https://github.com/m-alhoomaidi).
