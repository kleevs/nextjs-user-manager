import { getUserFactory, getUsersFactory, saveUserFactory, removeUserFactory } from '../user-factory'
const get = jest.fn();
const post = jest.fn();
const put = jest.fn();
const remove = jest.fn();

const getUser = getUserFactory({ get });
const getUsers = getUsersFactory({ get });
const saveUser = saveUserFactory({ post, put });
const removeUser = removeUserFactory({ remove });

describe('getUser', () => {
    test('should request user by id', () => {
        get.mockReturnValue(Promise.resolve({ lastName: 'user account' }))
        const result = getUser(3);

        return result.then(res => {
            expect(res).toStrictEqual({ lastName: 'user account' });
            expect(get).toHaveBeenCalledWith('users/3');
        })
    })
});

describe('getUsers', () => {
    test('should request users', () => {
        get.mockReturnValue(Promise.resolve([{ lastName: 'user 1' }, { lastName: 'user 2' }, { lastName: 'user 3' }]))
        const result = getUsers();

        return result.then(res => {
            expect(res).toStrictEqual(expect.arrayContaining([{ lastName: 'user 1' }, { lastName: 'user 2' }, { lastName: 'user 3' }]));
            expect(get).toHaveBeenCalledWith('users');
        })
    })
});

describe('saveUser', () => {
    test('should create new user', () => {
        post.mockReturnValue(Promise.resolve(1))
        put.mockReturnValue(Promise.resolve(2))

        const result = saveUser({ id: 0, value: 'new user' });

        return result.then(res => {
            expect(res).toStrictEqual(1);
            expect(post).toHaveBeenCalledWith('users', expect.objectContaining({ id: 0, value: 'new user' }));
            expect(put).not.toHaveBeenCalled();
        })
    })

    test('should update user', () => {
        post.mockReturnValue(Promise.resolve(1))
        put.mockReturnValue(Promise.resolve(2))

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
        remove.mockReturnValue(Promise.resolve())

        const result = removeUser(5);

        return result.then(() => {
            expect(remove).toHaveBeenCalledWith('users/5')
        })
    })
})