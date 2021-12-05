import { getUser } from "user-manager-business";
import Detail from '../component/detail'
import React, { useEffect, useState } from "react";

export default function DetailModule({id, navigate}: {
    id: number;
    navigate: (href: string) => void;
}) {
    const [user, onChange] = useState<User>({ id: 0 });
    const [errors, setErrors] = useState<UserError>({});

    useEffect(() => {
        id && getUser(id).then(onChange) || onChange({ id });
    }, [id])

    return <Detail navigate={navigate} model={user} onChange={onChange} errors={errors} setErrors={setErrors}/>
}