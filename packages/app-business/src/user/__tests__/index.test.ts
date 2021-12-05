import { get, put, post, remove } from "ajax";
import { getUser, getUsers, saveUser, removeUser } from "..";
import { mock } from 'lib';

jest.unmock('..');

describe('getUser', () => {
    test('should request user by id', () => {
        mock(get).mockReturnValue(Promise.resolve('user account'))
        const result = getUser(3);

        return result.then(res => {
            expect(res).toStrictEqual('user account');
            expect(get).toHaveBeenCalledWith('users/3');
        })
    })
});

describe('getUsers', () => {
    test('should request users', () => {
        mock(get).mockReturnValue(Promise.resolve(['user 1', 'user 2', 'user 3']))
        const result = getUsers();

        return result.then(res => {
            expect(res).toStrictEqual(expect.arrayContaining(['user 1', 'user 2', 'user 3']));
            expect(get).toHaveBeenCalledWith('users');
        })
    })
});

describe('saveUser', () => {
    test('should create new user', () => {
        mock(post).mockReturnValue(Promise.resolve(1))
        mock(put).mockReturnValue(Promise.resolve(2))

        const result = saveUser({ id: 0, name: 'new user' });

        return result.then(res => {
            expect(res).toStrictEqual(1);
            expect(post).toHaveBeenCalledWith('users', expect.objectContaining({ id: 0, name: 'new user' }));
            expect(put).not.toHaveBeenCalled();
        })
    })

    test('should update user', () => {
        mock(post).mockReturnValue(Promise.resolve(1))
        mock(put).mockReturnValue(Promise.resolve(2))

        const result = saveUser({ id: 2, name: 'user' });

        return result.then(res => {
            expect(res).toStrictEqual(2);
            expect(put).toHaveBeenCalledWith('users/2', expect.objectContaining({ id: 2, name: 'user' }));
            expect(post).not.toHaveBeenCalled();
        })
    })
});

describe('removeUser', () => {
    test('should remove user', () => {
        mock(remove).mockReturnValue(Promise.resolve())

        const result = removeUser(5);

        return result.then(() => {
            expect(remove).toHaveBeenCalledWith('users/5')
        })
    })
})