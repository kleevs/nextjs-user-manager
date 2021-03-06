import type { User, UserError } from "user-manager-business/src/type/user";
import type { getUser } from "user-manager-business/src/main";
import type Detail from '../component/detail'
import React, { useEffect, useState } from "react";

type Deps = {
    Detail: (typeof Detail) extends (...args: any[]) => infer T ? T : typeof Detail;
    getUser: typeof getUser;
}

export default ({ Detail, getUser }: Deps) => 
function DetailModule({id, navigate}: {
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