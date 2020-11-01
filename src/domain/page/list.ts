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

export class ListPage {
    users: IUser[] = [];
    constructor(private ajaxService: AjaxService) {
        this.ajaxService.get<IUser[]>(Urls.USERS).then(_ => this.users = _ || []);
    }

    removeUser(id: number) {
        return this.ajaxService.delete(Urls.USER(id))
        .then(() => location.href = `/`);
    }

    goTo(id: number) {
        location.href = `/users/${id}`;
    }
}
