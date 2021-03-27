import { ComponentType, FunctionComponent, useMemo } from "react";

export function useComponent<T>(component: FunctionComponent<T>, deps?: unknown[]) {
    const factory = useMemo(() => {
        let render: (props: T) => JSX.Element = null;;
        const component: ComponentType<T> = (props: T) => {
            return render && render(props);
        }
        return (c: FunctionComponent<T>) => {
            render = c;
            return component;
        }
    }, deps || []);

    return factory(component);
}