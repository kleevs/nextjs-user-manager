import { getUser, getUsers, saveUser, removeUser } from '../index'
import * as deps from '../_deps_/index.deps'
import { UserAccount } from '../../../type/user';
const mockModule: <T>(module: T) => {[k in keyof T]: {
    mock: <TResult, TArg extends unknown[]>(implementation?: T[k]) => jest.Mock<TResult,TArg>
} } = (module) => {
    Object.keys(module).forEach(_ => module[_] = null)
    const results = Object.keys(module).map(key => ({
        [key]: {
            mock: (implementation) => module[key] = jest.fn(implementation)
        }
    }))
    return results.reduce((previous, current) => ({...previous, ...current})) as any
}
const mock = mockModule(deps);

describe('getUser', () => {
    test('should request user by id', () => {
        const get = mock.getUser.mock<Promise<UserAccount>, [string]>(() => Promise.resolve({ lastName: 'user account' }))
        const result = getUser(3);

        return result.then(res => {
            expect(res).toStrictEqual({ lastName: 'user account' });
            expect(get).toHaveBeenCalledWith('users/3');
        })
    })
});

describe('getUsers', () => {
    test('should request users', () => {
        const get = mock.getUsers.mock<Promise<UserAccount[]>, [string]>(() => Promise.resolve([{ lastName: 'user 1' }, { lastName: 'user 2' }, { lastName: 'user 3' }]))
        const result = getUsers();

        return result.then(res => {
            expect(res).toStrictEqual(expect.arrayContaining([{ lastName: 'user 1' }, { lastName: 'user 2' }, { lastName: 'user 3' }]));
            expect(get).toHaveBeenCalledWith('users');
        })
    })
});

describe('saveUser', () => {
    test('should create new user', () => {
        const post = mock.post.mock<Promise<number>, [string]>(() => Promise.resolve(1))
        const put = mock.put.mock<Promise<number>, [string]>(() => Promise.resolve(2))

        const result = saveUser({ id: 0, value: 'new user' });

        return result.then(res => {
            expect(res).toStrictEqual(1);
            expect(post).toHaveBeenCalledWith('users', expect.objectContaining({ id: 0, value: 'new user' }));
            expect(put).not.toHaveBeenCalled();
        })
    })

    test('should update user', () => {
        const post = mock.post.mock<Promise<number>, [string]>(() => Promise.resolve(1))
        const put = mock.put.mock<Promise<number>, [string]>(() => Promise.resolve(2))

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
        const remove = mock.remove.mock<Promise<void>, [string]>(() => Promise.resolve())

        const result = removeUser(5);

        return result.then(() => {
            expect(remove).toHaveBeenCalledWith('users/5')
        })
    })
})