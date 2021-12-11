export function preventDefault(e, callback: () => void) {
    e.preventDefault();
    callback();
}

export function stopPropagation(e, callback: () => void) {
    e.stopPropagation();
    callback();
}