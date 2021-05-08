import { all, createStore } from '../store'

describe('store all', () => {
    test('should request user by id', () => {
        const onUpdate1 = jest.fn();
        const onUpdate2 = jest.fn();
        const callback = jest.fn();

        const onUpdate = all(onUpdate1, onUpdate2)
        onUpdate(callback);

        expect(callback).not.toBeCalled()

        onUpdate1.mock.calls[0][0]('tata', 'toto', 3)
        expect(callback).toBeCalledWith(['tata', 'toto', 3], undefined)

        onUpdate2.mock.calls[0][0](1234)
        expect(callback).toBeCalledWith(['tata', 'toto', 3], [1234])

        onUpdate2.mock.calls[0][0](398)
        expect(callback).toBeCalledWith(['tata', 'toto', 3], [398])

        onUpdate1.mock.calls[0][0]('end')
        expect(callback).toBeCalledWith(['end'], [398])
    })
});
