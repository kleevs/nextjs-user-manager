import DetailComponent from './detail';
import React from 'react';
import { Checkbox, DateLabelFieldWithError, TextLabelFieldWithError } from '../../component';
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
        FirstNameInput={TextLabelFieldWithError}
        LastNameNameInput={TextLabelFieldWithError}
        BirthdayInput={DateLabelFieldWithError}
        LoginInput={TextLabelFieldWithError}
        PasswordInput={TextLabelFieldWithError}
        IsActifCheckbox={Checkbox}
        preventDefault={preventDefault}
        save={() => saveUser(user).catch(setErrors).then(_ => _ || null)}
        navigate={(href) => location.href = href}
        model={user}
        onChange={onChange}
        errors={errors}
        setErrors={setErrors}
    />;
}