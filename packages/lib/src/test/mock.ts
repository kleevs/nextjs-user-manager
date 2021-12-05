export function mock<TArg extends unknown[], TResult>(fn: (...arg: TArg) => TResult): jest.Mock<TResult, TArg> {
    return fn as any;
}