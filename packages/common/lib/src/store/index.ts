export interface Updater<T>  {
    update(v: T): void;
}

export interface Listener<T>  {
    getValue(): T;
    onUpdate(deps: (v) => unknown[], callback: (v: T) => void): () => void;
    onUpdate(callback: (v: T) => void): () => void;
}

export interface Store<T> extends Listener<T>, Updater<T> {
}

export function createStore<T>(defaultValue?: T): Store<T> {
    let value: T = defaultValue;
    let subscribers: ((v: T) => void)[] = [];
    
    return {
        getValue: () => value,
        update: (v: T) => { 
            value = v;
            subscribers.forEach(callback => callback && callback(v));
        },
        onUpdate: function () {
            const callback: (v: T) => void = arguments.length == 2 ? arguments[1] : arguments[0];
            const deps: (v: T) => unknown[] = arguments.length == 2 ? arguments[0] : (v) => [v];
            let oldValue = deps(value);
            subscribers.push((current) => {
                const newValue = deps(current);
                const hasChanged = !oldValue.every((v, i) => v === newValue[i]);
                if (hasChanged) {
                    oldValue = newValue;
                    callback(current);
                }
            });
            return () => subscribers = subscribers.filter(c => c !== callback);
        }
    }
}
