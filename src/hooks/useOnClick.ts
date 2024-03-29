import { useCallback } from 'react';
import { debounce, throttle } from '../utils';

interface UseOnClickOptions {
    debounceDelay?: number;
    throttleInterval?: number;
}

/**
 * Provides a function to register an onClick event handler on the document with optional debouncing or throttling.
 * The returned function accepts a callback and options for debouncing or throttling the event handling.
 *
 * @returns A function that accepts an event handler and an options object for configuring debouncing or throttling.
 */
export const useOnClick = () => {
    /**
     * Registers an onClick event handler with optional debouncing or throttling.
     * 
     * @param onClickCallback - The callback function to execute when the click event is triggered.
     * @param options - Configuration options for debouncing or throttling.
     * @returns Cleanup function to unregister the event handler.
     */
    return useCallback((onClickCallback: (event: MouseEvent) => void, { debounceDelay, throttleInterval }: UseOnClickOptions = {}): (() => void) => {
        let eventHandler: (event: MouseEvent) => void = onClickCallback;

        if (typeof debounceDelay === 'number') {
            eventHandler = debounce(onClickCallback, debounceDelay);
        } else if (typeof throttleInterval === 'number') {
            eventHandler = throttle(onClickCallback, throttleInterval);
        }

        document.addEventListener('click', eventHandler);

        return () => document.removeEventListener('click', eventHandler);
    }, []);
};
