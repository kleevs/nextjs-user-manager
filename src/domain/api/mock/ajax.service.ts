import * as Urls from '../url.constant';

export class MockAjaxService implements Tools.Ajax {
    get<T>(url: string): Promise<T> { 
        return url === Urls.USERS && Promise.resolve(users) || 
        url.indexOf(Urls.USER(undefined)) === 0 && Promise.resolve(users.filter(_ => _.id === parseInt(url.substr(Urls.USER(undefined).length)))[0]) || 
        Promise.resolve(null); 
    }
    put<TIn, TOut>(url: string, body: TIn): Promise<TOut> { 
        return url.indexOf(Urls.USER(undefined)) === 0 && (() => { 
            var id = users.length+1;
            var user: any = body;
            var errors = [];
            if (!user.password) {
                errors.push({ code: "PSSW", message: 'Renseigner un mot de passe' });
            }
            if (!user.login) {
                errors.push({ code: "LGN", message: 'Renseigner un login' });
            }
            if (!user.birthdate) {
                errors.push({ code: "BIRTH", message: 'Date de naissance invalide' });
            }
            if (!user.lastName) {
                errors.push({ code: "LSTN", message: 'Renseigner un nom de famille' });
            }
            if (!user.firstName) {
                errors.push({ code: "FRSN", message: 'Renseigner un prénom' });
            }
            if (errors.length > 0) {
                return Promise.reject(errors);
            }
            users.push({
                id,
                lastName: user.lastName,
                firstName: user.firstName,
                birthdate: user.birthdate,
                login: user.login,
                isAcif: user.isAcif,
                password: user.password
            });
            save();
            return Promise.resolve(id); 
        })() || 
        Promise.resolve(null);
    }
    post<TIn, TOut>(url: string, body: TIn): Promise<TOut> { 
        return url.indexOf(Urls.USER(undefined)) === 0 && (() => { 
            var user: any = body;
            var entity = users.filter(_ => _.id === user.id)[0];
            var errors = [];
            if (!user.birthdate) {
                errors.push({ code: "BIRTH", message: 'Date de naissance invalide' });
            }
            if (!user.lastName) {
                errors.push({ code: "LSTN", message: 'Renseigner un nom de famille' });
            }
            if (!user.firstName) {
                errors.push({ code: "FRSN", message: 'Renseigner un prénom' });
            }
            if (errors.length > 0) {
                return Promise.reject(errors);
            }
            entity.id = user.id;
            entity.lastName = user.lastName;
            entity.firstName = user.firstName;
            entity.birthdate = user.birthdate;
            entity.login = user.login;
            entity.isAcif = user.isAcif;
            save();
            return Promise.resolve(entity.id); 
        })() || 
        Promise.resolve(null);
     }
    delete<T>(url: string): Promise<T> { 
        return url.indexOf(Urls.USER(undefined)) === 0 && (() => {
            users = users.filter(_ => _.id !== parseInt(url.substr(Urls.USER(undefined).length)));
            save();
            return Promise.resolve(null); 
        })() || 
        Promise.resolve(null);
     }
}

var users = [
    {
        id: 1,
        lastName: 'Dupont',
        firstName: 'Charles',
        birthdate: new Date(),
        login: 'c.dupont',
        isAcif: true,
        password: '1234'
    }
];

function load() {
    var data = localStorage.getItem("users");
    users = data && JSON.parse(data) || users;
    users.forEach(_ => _.birthdate = new Date(_.birthdate));
}

function save() {
    var data = localStorage.setItem("users", JSON.stringify(users));
}

load();