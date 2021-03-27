import React, { ComponentType } from "react";
import { UserAccount, UserError } from "user-manager-business/src/type/user";

export default function Detail ({
    FirstNameInput, LastNameNameInput, BirthdayInput, LoginInput, PasswordInput, IsActifCheckbox,
    save, navigate, preventDefault,
    model, errors, onChange, setErrors
}: {
    FirstNameInput: ComponentType<{ label: string; value: string; error: string; onChange: (v: string) => void; }>;
    LastNameNameInput: ComponentType<{ label: string; value: string; error: string; onChange: (v: string) => void; }>;
    BirthdayInput: ComponentType<{ label: string; value: Date; error: string; onChange: (v: Date) => void; }>;
    LoginInput: ComponentType<{ label: string; value: string; error: string; onChange: (v: string) => void; }>;
    PasswordInput: ComponentType<{ label: string; value: string; error: string; onChange: (v: string) => void; }>;
    IsActifCheckbox: ComponentType<{ checked: boolean; onChange: (v: boolean) => void; }>;
    save: () => Promise<number>;
    navigate: (location: string) => void;
    preventDefault: (e, callback: ()=>void) => void;
    model: UserAccount;
    onChange: (v: UserAccount) => void;
    errors: UserError;
    setErrors: (v: UserError) => void;
}) {
    return <div>
        <h1 className="title">Détail de l'utilisateur</h1> 
        <hr/>
        <div className="container">
            <form className="full-width center"  onSubmit={(e) => preventDefault(e, () => save().then(id => id && navigate(`/users/${id}`)))}>
                <LastNameNameInput label='Nom' error={errors.lastNameError} value={model.lastName} 
                    onChange={(lastName) => (onChange({...model, lastName}), setErrors({...errors, lastNameError: ''}))} />
                <FirstNameInput label='Prénom' error={errors.firstNameError} value={model.firstName} 
                    onChange={(firstName) => (onChange({...model, firstName}), setErrors({...errors, firstNameError: ''}))} />
                <BirthdayInput label='Date de naissance' error={errors.birthdateError} value={model.birthdate} 
                    onChange={(birthdate) => (onChange({...model, birthdate}), setErrors({...errors, birthdateError: ''}))} />
                <LoginInput label='Login' error={errors.loginError} value={model.login} 
                    onChange={(login) => (onChange({...model, login}), setErrors({...errors, loginError: ''}))} />
                <PasswordInput label='Mot de passe' error={errors.passwordError} value={model.password} 
                    onChange={(password) => (onChange({...model, password}), setErrors({...errors, passwordError: ''}))} />
                <IsActifCheckbox checked={model.isActif} onChange={(isActif) => onChange({...model, isActif})} />
                <button type="submit" className="btn btn-primary full-width" data-content="Enregistrer l'utilisateur">Enregistrer</button>
            </form>
        </div>
    </div>
}


