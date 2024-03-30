import React, { useCallback } from 'react';
import { debounce, throttle } from '../utils';

export interface UseEventHandlerOptions {
    debounceDelay?: number;
    throttleInterval?: number;
    ref?: React.RefObject<Document>
}

/**
 * Provides a hook to register an event handler with optional debouncing or throttling.
 * The returned function accepts a callback and options for debouncing or throttling the event handling.
 *
 * @param eventName - The name of the event to register.
 * @returns A hook function that accepts an event handler and an options object for configuring debouncing or throttling.
 */
export const useEventHandler = (eventName: string) => {
    /**
     * Registers an event handler with optional debouncing or throttling.
     * 
     * @param eventCallback - The callback function to execute when the event is triggered.
     * @param options - Configuration options for debouncing or throttling.
     * @returns Cleanup function to unregister the event handler.
     */
    return useCallback((eventCallback: (event: Event) => void, { debounceDelay, throttleInterval, ref }: UseEventHandlerOptions = {}): (() => void) => {
        let eventHandler: (event: Event) => void = eventCallback;
        let target = document;
        if (typeof debounceDelay === 'number') {
            eventHandler = debounce(eventCallback, debounceDelay);
        } else if (typeof throttleInterval === 'number') {
            eventHandler = throttle(eventCallback, throttleInterval);
        }
        if (ref && ref.current) {
            target = ref.current;
        }
        target.addEventListener(eventName, eventHandler);

        return () => target.removeEventListener(eventName, eventHandler);
    }, [eventName]);
};
