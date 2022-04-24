import { getUser, User, UserError, saveUser, createListPageData } from "user-manager-business";
import Detail from '../common/detail'
import React, { useEffect, useMemo, useState } from "react";

export function DetailModule({id, navigate}: {
    id: number;
    navigate: (href: string) => void;
}) {
    const pageData = useMemo(createListPageData, []);
    const [user, onChange] = useState<User>({ id: 0 });
    const [errors, setErrors] = useState<UserError>({});

    useEffect(() => {
        id ? onChange(getUser(pageData, id)) : onChange({ id });
    }, [id])

    return <Detail saveUser={(u) => saveUser(pageData, u)} navigate={navigate} model={user} onChange={onChange} errors={errors} setErrors={setErrors}/>
}