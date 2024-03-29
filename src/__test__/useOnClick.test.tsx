import { render, fireEvent } from '@testing-library/react';
import React, { useEffect } from 'react';
import { useOnClick } from '../hooks/useOnClick';

describe('useOnClick', () => {
  test('it triggers the callback on click', () => {
    const handleClick = jest.fn();
    const TestComponent = () => {
      const onClick = useOnClick();
      useEffect(() => onClick(handleClick, {}), [onClick]);

      return <div>Test</div>;
    };

    const { getByText } = render(<TestComponent />);
    fireEvent.click(getByText('Test'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
