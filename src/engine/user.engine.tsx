export class UserEngine {
    constructor(private _ajax: Tools.Ajax) {
    }

    list() {
        return this._ajax.get<User[]>('/users').then(_ => _ || []);
    }

    get(id: number) {
        return this._ajax.get<User>(`/users/${id}`);
    }

    removeUser(id: number) {
        return this._ajax.delete(`/users/${id}`).then(() => location.href = `/`);
    }

    saveUser(user: User) {
        return (!user.id ? 
            this._ajax.put<User, number>(`/users`, user) : 
            this._ajax.post<User, number>(`/users/${user.id}`, user));
    }
}