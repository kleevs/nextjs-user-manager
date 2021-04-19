import { getUserFactory, getUsersFactory, saveUserFactory, removeUserFactory, Deps as DepsOfT } from '../user-factory'

type Get = DepsOfT<string>['Get'];
type Gets = DepsOfT<string[]>['Get'];
type Post = DepsOfT<{ id: number, name: string }>['Post'];
type Put = DepsOfT<{ id: number, name: string }>['Put'];
type Remove = DepsOfT<string>['Remove'];

const get = jest.fn(null as Get);
const gets = jest.fn(null as Gets);
const post = jest.fn(null as Post);
const put = jest.fn(null as Put);
const remove = jest.fn(null as Remove);

const getUser = getUserFactory({ get });
const getUsers = getUsersFactory({ get: gets });
const saveUser = saveUserFactory({ post, put });
const removeUser = removeUserFactory({ remove });

beforeEach(() => {
    get.mockClear();
    gets.mockClear();
    post.mockClear();
    put.mockClear();
    remove.mockClear();
})

describe('getUser', () => {
    test('should request user by id', () => {
        get.mockReturnValue(Promise.resolve('user account'))
        const result = getUser(3);

        return result.then(res => {
            expect(res).toStrictEqual('user account');
            expect(get).toHaveBeenCalledWith('users/3');
        })
    })
});

describe('getUsers', () => {
    test('should request users', () => {
        gets.mockReturnValue(Promise.resolve(['user 1', 'user 2', 'user 3']))
        const result = getUsers();

        return result.then(res => {
            expect(res).toStrictEqual(expect.arrayContaining(['user 1', 'user 2', 'user 3']));
            expect(gets).toHaveBeenCalledWith('users');
        })
    })
});

describe('saveUser', () => {
    test('should create new user', () => {
        post.mockReturnValue(Promise.resolve(1))
        put.mockReturnValue(Promise.resolve(2))

        const result = saveUser({ id: 0, name: 'new user' });

        return result.then(res => {
            expect(res).toStrictEqual(1);
            expect(post).toHaveBeenCalledWith('users', expect.objectContaining({ id: 0, name: 'new user' }));
            expect(put).not.toHaveBeenCalled();
        })
    })

    test('should update user', () => {
        post.mockReturnValue(Promise.resolve(1))
        put.mockReturnValue(Promise.resolve(2))

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
        remove.mockReturnValue(Promise.resolve())

        const result = removeUser(5);

        return result.then(() => {
            expect(remove).toHaveBeenCalledWith('users/5')
        })
    })
})