
export const debounce = (func: (...args: any[]) => void, delay: number): ((...args: any[]) => void) => {
    let timerId: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => { func(...args); }, delay);
    };
};

export const throttle = (func: (...args: any[]) => void, limit: number): ((...args: any[]) => void) => {
    let inThrottle: boolean;
    return (...args: any[]) => {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => { inThrottle = false; }, limit);
        }
    };
};
