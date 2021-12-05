export function createStore<T extends unknown[]>(initializer: (updater: (...v: T) => void) => () => void) {
    const _undefined: T = {} as any;
    let callbacks: ((...arg: T) => void)[] = [];
    let unsuscribe = null;
    let value: T = _undefined;
    return (callback: (...arg: T) => void) => {
        callbacks.push(callback);
        (value !== _undefined) && callback(...value)
        unsuscribe = callbacks.length === 1 && initializer((...arg) => callbacks.forEach(c => c(...(value = arg)))) || unsuscribe
        return () => {
            callbacks = callbacks.filter(_ => _ !== callback)
            callbacks.length === 0 && unsuscribe()
        }
    }
}

type Listener<T extends unknown[]> = (callback: (...arg: T) => void) => () => void;
export function all<T1 extends unknown[], T2 extends unknown[]>(store1: Listener<T1>, store2: Listener<T2>): (callback: (v1: T1, v2: T2) => void) => () => void
export function all<T1 extends unknown[], T2 extends unknown[], T3 extends unknown[]>(store1: Listener<T1>, store2: Listener<T2>, store3: Listener<T3>): (callback: (v1: T1, v2: T2, v3: T3) => void) => () => void
export function all<T1 extends unknown[], T2 extends unknown[], T3 extends unknown[], T4 extends unknown[]>(store1: Listener<T1>, store2: Listener<T2>, store3: Listener<T3>, store4: Listener<T4>): (callback: (v1: T1, v2: T2, v3: T3, v4: T4) => void) => () => void
export function all(...stores: Listener<unknown[]>[]) {
    return (callback: (...args) => void) => {
        const args = [];
        const updater = (arg, i: number) => { 
            args[i] = arg;
            callback(...args)
        }

        const callbacks = stores.map((store,i) => {
            return (...arg) => updater(arg, i)
        })

        const unsuscribes = stores.map((store,i) => {
            return store(callbacks[i])
        })

        return () => unsuscribes.map(c => c())
    }
}

function onUpdateNumber(callback: (value: number) => void) {
    console.log('suscribe')
    callback(10);
    return () => {
        console.log('unsuscribe')
    }
}

function onUpdateString(callback: (value: string) => void) {
    console.log('suscribe')
    callback('tata');
    return () => {
        console.log('unsuscribe')
    }
}

const onUpdate = all(onUpdateNumber, onUpdateString);
onUpdate(([num], [str]) => {
    console.log(num, str)
})