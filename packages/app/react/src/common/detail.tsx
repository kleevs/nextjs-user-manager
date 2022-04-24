import { preventDefault } from 'lib'
import { UserAccount, UserError } from 'user-manager-business';
import  TextField from "./text-field";
import DateField from "./date-field";
import React, { useCallback } from "react";
import styled from 'styled-components';

export const Checkbox = styled.input``;

export default function Detail ({
    navigate, saveUser,
    model, errors, onChange, setErrors
}: {
    navigate: (location: string) => void;
    model: UserAccount;
    onChange: (v: UserAccount) => void;
    errors: UserError;
    setErrors: (v: UserError) => void;
    saveUser: (user: UserAccount) => void;
}) {
    const save = useCallback(() => {
        try {
            const id = saveUser(model);
            navigate(`/users/${id}`);
        }
        catch (e) {
            setErrors(e);
            return;
        }
    }, [model, setErrors, navigate])
    return <div>
        <h1 className="title">Détail de l'utilisateur</h1> 
        <hr/>
        <div className="container">
            <form className="full-width center"  onSubmit={(e) => preventDefault(e, () => save())}>
                <TextField label='Nom' error={errors.lastNameError} value={model.lastName} 
                    onChange={(lastName) => (onChange({...model, lastName}), setErrors({...errors, lastNameError: ''}))} />
                <TextField label='Prénom' error={errors.firstNameError} value={model.firstName} 
                    onChange={(firstName) => (onChange({...model, firstName}), setErrors({...errors, firstNameError: ''}))} />
                <DateField label='Date de naissance' error={errors.birthdateError} value={model.birthdate} 
                    onChange={(birthdate) => (onChange({...model, birthdate}), setErrors({...errors, birthdateError: ''}))} />
                <TextField label='Login' error={errors.loginError} value={model.login} 
                    onChange={(login) => (onChange({...model, login}), setErrors({...errors, loginError: ''}))} />
                <TextField label='Mot de passe' error={errors.passwordError} value={model.password} 
                    onChange={(password) => (onChange({...model, password}), setErrors({...errors, passwordError: ''}))} />
                <Checkbox type='checkbox' value="actif" checked={model.isActif} onChange={(e) => onChange({...model, isActif: e.target.checked})} />
                <button type="submit" className="btn btn-primary full-width" data-content="Enregistrer l'utilisateur">Enregistrer</button>
            </form>
        </div>
    </div>
}


