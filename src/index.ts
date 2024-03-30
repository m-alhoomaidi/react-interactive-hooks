import { useEventHandler } from "./hooks/useEventHandler";

export const useOnClick = () => {
    return useEventHandler('click');
};

export const useOnScroll = () => {
    return useEventHandler('scroll');
};

export const useOnMouseEnter = () => {
    return useEventHandler('mouseenter');
};

export const useOnMouseLeave = () => {
    return useEventHandler('mouseleave');
};

export const useOnResize = () => {
    return useEventHandler('resize');
};

export const useOnFocus = () => {
    return useEventHandler('focus');
};

export const useOnBlur = () => {
    return useEventHandler('blur');
};

export const useOnKeyUp = () => {
    return useEventHandler('keyup');
};

export const useOnKeyDown = () => {
    return useEventHandler('keydown');
};

export const useOnKeyPress = () => {
    return useEventHandler('keypress');
};

export const useOnMouseMove = () => {
    return useEventHandler('mousemove');
};

export const useOnMouseOver = () => {
    return useEventHandler('mouseover');
};

export const useOnMouseOut = () => {
    return useEventHandler('mouseout');
};

export const useOnDoubleClick = () => {
    return useEventHandler('dblclick');
};

export const useOnMouseDown = () => {
    return useEventHandler('mousedown');
};

export const useOnMouseUp = () => {
    return useEventHandler('mouseup');
};

export const useOnContextMenu = () => {
    return useEventHandler('contextmenu');
};

export const useOnWheel = () => {
    return useEventHandler('wheel');
};

export const useOnTouchStart = () => {
    return useEventHandler('touchstart');
};

export const useOnTouchMove = () => {
    return useEventHandler('touchmove');
};

export const useOnTouchEnd = () => {
    return useEventHandler('touchend');
};

export const useOnTouchCancel = () => {
    return useEventHandler('touchcancel');
};

export const useOnPointerDown = () => {
    return useEventHandler('pointerdown');
};

export const useOnPointerMove = () => {
    return useEventHandler('pointermove');
};

export const useOnPointerUp = () => {
    return useEventHandler('pointerup');
};

export const useOnPointerCancel = () => {
    return useEventHandler('pointercancel');
};

export const useOnChange = () => {
    return useEventHandler('change');
};