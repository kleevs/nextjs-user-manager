import { getUserFactory, getUsersFactory, saveUserFactory, removeUserFactory } from '../user'

describe('getUser', () => {
    test('should request user by id', () => {
        const get = jest.fn(() => Promise.resolve('user account'));
        const getUser = getUserFactory({ get })

        const result = getUser(3);

        return result.then(res => {
            expect(res).toBe('user account');
            expect(get).toHaveBeenCalledWith('users/3');
        })
    })
});

describe('getUsers', () => {
    test('should request users', () => {
        const get = jest.fn(() => Promise.resolve(['user 1', 'user 2', 'user 3']));
        const getUsers = getUsersFactory({ get })

        const result = getUsers();

        return result.then(res => {
            expect(res).toStrictEqual(expect.arrayContaining(['user 1', 'user 2', 'user 3']));
            expect(get).toHaveBeenCalledWith('users');
        })
    })
});

describe('saveUser', () => {
    test('should create new user', () => {
        const post = jest.fn(() => Promise.resolve(1));
        const put = jest.fn(() => Promise.resolve(2));
        const saveUser = saveUserFactory({ post, put })

        const result = saveUser({ id: 0, value: 'new user' });

        return result.then(res => {
            expect(res).toStrictEqual(1);
            expect(post).toHaveBeenCalledWith('users', expect.objectContaining({ id: 0, value: 'new user' }));
            expect(put).not.toHaveBeenCalled();
        })
    })

    test('should update user', () => {
        const post = jest.fn(() => Promise.resolve(1));
        const put = jest.fn(() => Promise.resolve(2));
        const saveUser = saveUserFactory({ post, put })

        const result = saveUser({ id: 2, value: 'user' });

        return result.then(res => {
            expect(res).toStrictEqual(2);
            expect(put).toHaveBeenCalledWith('users/2', expect.objectContaining({ id: 2, value: 'user' }));
            expect(post).not.toHaveBeenCalled();
        })
    })
});

describe('removeUser', () => {
    test('should remove user', () => {
        const remove = jest.fn();
        const removeUser = removeUserFactory({ delete: remove })
        
        const result = removeUser(5);

        return result.then(() => {
            expect(remove).toHaveBeenCalledWith('users/5')
        })
    })
})