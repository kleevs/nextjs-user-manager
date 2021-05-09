import type { TextField, DateField, Checkbox, preventDefault } from 'lib/src/main'
import type { saveUser } from 'user-manager-business/src/main';
import type { UserAccount, UserError } from "user-manager-business/src/type/user";
import React from "react";

type Deps = {
    TextField: typeof TextField;
    DateField: typeof DateField;
    Checkbox: typeof Checkbox;
    preventDefault: typeof preventDefault;
    saveUser: typeof saveUser;
}

export default ({TextField, DateField, Checkbox, preventDefault, saveUser}: Deps) => 
function Detail ({
    navigate,
    model, errors, onChange, setErrors
}: {
    navigate: (location: string) => void;
    model: UserAccount;
    onChange: (v: UserAccount) => void;
    errors: UserError;
    setErrors: (v: UserError) => void;
}) {
    return <div>
        <h1 className="title">Détail de l'utilisateur</h1> 
        <hr/>
        <div className="container">
            <form className="full-width center"  onSubmit={(e) => preventDefault(e, () => saveUser(model).then(id => id && navigate(`/users/${id}`)).catch(setErrors))}>
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
                <Checkbox checked={model.isActif} onChange={(isActif) => onChange({...model, isActif})} />
                <button type="submit" className="btn btn-primary full-width" data-content="Enregistrer l'utilisateur">Enregistrer</button>
            </form>
        </div>
    </div>
}


