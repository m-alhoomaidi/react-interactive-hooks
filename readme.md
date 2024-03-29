# React Activity

`react-interactive-hooks` provides a set of React hooks for efficiently handling
user activity events, such as clicks and mouse movements, with built-in support
for debouncing and throttling to optimize performance.

## Installation

To install `react-interactive-hooks`, run the following command in your project
directory:

```bash
npm install react-interactive-hooks

```

### Step 3: Usage Examples

Offer simple, clear examples of how to use your hooks. It's often helpful to
start with basic usage and then showcase more advanced configurations or
options.

`````markdown
## Usage

Below are examples demonstrating how to use the hooks provided by
`react-interactive-hooks`.

### useOnClick

Register a click event on the entire document:

````jsx
import { useOnClick } from 'react-interactive-hooks';


### Step 3: Usage Examples

Offer simple, clear examples of how to use your hooks. It's often helpful to start with basic usage and then showcase more advanced configurations or options.

```markdown
## Usage

Below are examples demonstrating how to use the hooks provided by `react-interactive-hooks`.
### Combining Hooks for Enhanced Interactivity

You can easily combine multiple hooks from `react-interactive-hooks` to create more interactive and performant components. Here's an example of using `useOnClick` and `useOnMouseEnter` together to handle clicks and mouse enter events on the entire document:

```jsx
import React from 'react';
import { useOnClick, useOnMouseEnter } from 'react-interactive-hooks';

const InteractiveComponent = () => {
  // Use the useOnClick hook
  const onClick = useOnClick();
  React.useEffect(() => {
    onClick(() => {
      console.log('Document clicked');
    });
  }, [onClick]);

  // Use the useOnMouseEnter hook with debouncing
  const onMouseEnter = useOnMouseEnter();
  React.useEffect(() => {
    onMouseEnter(() => {
      console.log('Mouse entered the document area');
    }, { debounceDelay: 200 });
  }, [onMouseEnter]);

  return <div>Interact with the document to see console logs.</div>;
};
````
`````
