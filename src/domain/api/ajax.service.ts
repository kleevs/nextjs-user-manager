export default class AjaxService implements Tools.Ajax {
    put<T1, T2>(uri: string, data: T1): Promise<T2> {
        throw new Error("Method not implemented.");
    }
    post<T1, T2>(uri: string, data: T1): Promise<T2> {
        throw new Error("Method not implemented.");
    }

    get<T>(uri: string): Promise<T> {
        if (uri === '/users') {
            return Promise.resolve<User[]>([{
                id: 1,
                lastName: '',
                firstName: '',
                birthdate: null,
                login: '',
                isActif: true
            }]) as any;
        }

        if (uri === '/users/1') {
            return Promise.resolve<User>({
                id: 1,
                lastName: 'Bob',
                firstName: 'John',
                birthdate: null,
                login: '',
                isActif: true
            }) as any;
        }
    }    
    
    delete<T>(uri: string): Promise<T> {
        return Promise.resolve(null);
    }

}