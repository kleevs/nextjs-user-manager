import { PageDetailData, saveUser, UserError } from "detail-page";
import { moveOnDetail, UserAccount } from "common-page";
import React, { useState, useCallback } from "react";
import { preventDefault, Store } from 'lib'
import  TextField from "../common/text-field";
import DateField from "../common/date-field";
import styled from 'styled-components';
import { useSelector } from "../hooks/use-selector";

export const Checkbox = styled.input``;

export function DetailModule({ pageData }: {
    pageData: Store<PageDetailData>;
}) {
    const userInit = useSelector(pageData, ({ user }) => user)
    const [user, onChange] = useState<UserAccount>(() => userInit || { id: 0 });
    const [errors, setErrors] = useState<UserError>({});
    const save = useCallback(() => {
        try {
            const id = saveUser(pageData, user);
            moveOnDetail(pageData, id);
        }
        catch (e) {
            setErrors(e);
            return;
        }
    }, [user, setErrors]);

    return <div>
        <h1 className="title">Détail de l'utilisateur</h1> 
        <hr/>
        <div className="container">
            <form className="full-width center"  onSubmit={(e) => preventDefault(e, () => save())}>
                <TextField label='Nom' error={errors.lastNameError} value={user.lastName} 
                    onChange={(lastName) => (onChange({...user, lastName}), setErrors({...errors, lastNameError: ''}))} />
                <TextField label='Prénom' error={errors.firstNameError} value={user.firstName} 
                    onChange={(firstName) => (onChange({...user, firstName}), setErrors({...errors, firstNameError: ''}))} />
                <DateField label='Date de naissance' error={errors.birthdateError} value={user.birthdate} 
                    onChange={(birthdate) => (onChange({...user, birthdate}), setErrors({...errors, birthdateError: ''}))} />
                <TextField label='Login' error={errors.loginError} value={user.login} 
                    onChange={(login) => (onChange({...user, login}), setErrors({...errors, loginError: ''}))} />
                <TextField label='Mot de passe' error={errors.passwordError} value={user.password} 
                    onChange={(password) => (onChange({...user, password}), setErrors({...errors, passwordError: ''}))} />
                <Checkbox type='checkbox' value="actif" checked={user.isActif} onChange={(e) => onChange({...user, isActif: e.target.checked})} />
                <button type="submit" className="btn btn-primary full-width" data-content="Enregistrer l'utilisateur">Enregistrer</button>
            </form>
        </div>
    </div>
}