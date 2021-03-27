import DetailComponent from './detail';
import React from 'react';
import { Input, Checkbox, DateInput } from '../../component';
import { preventDefault } from '../../tools/dom';
import { UserError, UserAccount } from 'user-manager-business/src/type/user';
import { saveUser } from 'user-manager-business/src/service/user';

export default function Detail({user, onChange, errors, setErrors}: {
    user: UserAccount;
    onChange: (v: UserAccount) => void;
    errors: UserError;
    setErrors: (v: UserError) => void;
}) { 
    return <DetailComponent 
        FirstNameInput={<Input value={user?.firstName} 
            onChange={(v) => (onChange({...user, firstName: v}), setErrors({...errors, firstNameError: ''}))} />}
        LastNameNameInput={<Input value={user?.lastName} 
            onChange={(v) => (onChange({...user, lastName: v}), setErrors({...errors, lastNameError: ''}))} />}
        BirthdayInput={<DateInput value={user?.birthdate} 
            onChange={(v) => (onChange({...user, birthdate: v}), setErrors({...errors, birthdateError: ''}))} />}
        LoginInput={<Input value={user?.login} 
            onChange={(v) => (onChange({...user, login: v}), setErrors({...errors, loginError: ''}))} />}
        PasswordInput={<Input value={user?.password} 
            onChange={(v) => (onChange({...user, password: v}), setErrors({...errors, passwordError: ''}))} />}
        IsActifCheckbox={<Checkbox checked={user?.isActif} 
            onChange={(v) => onChange({...user, isActif: v})} />}
        isUserActif={user.isActif} 
        preventDefault={preventDefault}
        save={() => saveUser(user)}
        navigate={(href) => location.href = href}
    />;
}