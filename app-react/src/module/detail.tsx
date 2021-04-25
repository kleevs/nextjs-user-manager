import React, { useEffect, useState } from "react";
import { User, UserError } from "user-manager-business/src/type/user";
import Detail from '../container/detail'
import { getUser } from "user-manager-business/src/main";

export function DetailModule({id, navigate}: {
    id: number;
    navigate: (href: string) => void;
}) {
    const [user, onChange] = useState<User>({});
    const [errors, setErrors] = useState<UserError>({});

    useEffect(() => {
        id && getUser(id).then(onChange) || onChange({});
    }, [id])

    return <Detail navigate={navigate} user={user} onChange={onChange} errors={errors} setErrors={setErrors}/>
}