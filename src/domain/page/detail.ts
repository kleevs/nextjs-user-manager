import AjaxService from '../api/ajax.service';
import * as Urls from '../api/url.constant';

interface IUser {
    id: number;
    lastName: string;
    firstName: string;
    birthdate: Date;
    login: string;
    isAcif: boolean;
}

export class DetailPage {
    id: number = 0;
    lastName: string = '';
    firstName: string = '';
    birthdate: Date = null;
    login: string = '';
    password: string = '';
    isActif: boolean = false;

    lastNameError: string = '';
    firstNameError: string = '';
    birthdateError: string = '';
    loginError: string = '';
    passwordError: string = '';

    constructor(private ajaxService: AjaxService, id: number) {
        this.id = id;
        id && this.ajaxService.get<IUser>(Urls.USER(id)).then(_ => {
            if (_) {
                this.id = _.id;
                this.lastName = _.lastName;
                this.firstName = _.firstName;
                this.birthdate = _.birthdate;
                this.login = _.login;
                this.isActif = _.isAcif;
                this.password = "password";
            }
        });
    }

    saveUser() {
        var user = {
            id: this.id,
            lastName: this.lastName,
            firstName: this.firstName,
            birthdate: this.birthdate,
            login: this.login,
            isAcif: this.isActif,
            password: !this.id && this.password || null
        };

        this.lastNameError = '';
        this.firstNameError = '';
        this.birthdateError = '';
        this.loginError = '';
        this.passwordError = '';

        (!this.id ? 
            this.ajaxService.put<IUser, number>(Urls.USER(user.id), user) : 
            this.ajaxService.post<IUser, number>(Urls.USER(user.id), user)).then(_ => {
                location.href = "/";
            }).catch(errors => {
                errors.forEach(e => {
                    if (e.code === "PSSW") {
                        this.passwordError = e.message;
                    }
                    if (e.code === "LGN") {
                        this.loginError = e.message;
                    }
                    if (e.code === "BIRTH") {
                        this.birthdateError = e.message;
                    }
                    if (e.code === "LSTN") {
                        this.lastNameError = e.message;
                    }
                    if (e.code === "FRSN") {
                        this.firstNameError = e.message;
                    }
                });
            });
    }
}
