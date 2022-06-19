import { saveUser, DetailPageContext, AppContext, loadUser, UserAccount, UserError } from 'user-manager';
import React, { useState, useCallback, useMemo } from "react";
import { preventDefault } from 'lib'
import  { TextField, DateField, useAsync } from "lib-ui";
import styled from 'styled-components';

export const Checkbox = styled.input``;

export function DetailModule({ id, context }: {
    id: number;
    context: AppContext;
}) {
    const userInit = useAsync(() => loadUser(id), [])
    const [user, onChange] = useState<UserAccount>(() => userInit || { id: 0 });
    const [errors, setErrors] = useState<UserError>({});
    const detailContext = useMemo<DetailPageContext>(() => ({...context}), []);
    const save = useCallback(async () => {
        try {
            await saveUser(detailContext, user);
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