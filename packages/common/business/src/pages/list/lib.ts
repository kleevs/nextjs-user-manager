export function createStore<T>(defaultValue?: T) {
    let value: T = defaultValue;
    let subscribers: ((v: T) => void)[] = [];
    
    return {
        getValue: () => value,
        update: (v: T) => { 
            value = v;
            subscribers.forEach(callback => callback && callback(v));
        },
        onUpdate: (callback: (v: T) => void) => {
            subscribers.push(callback);
            return () => subscribers = subscribers.filter(c => c !== callback);
        }
    }
}
