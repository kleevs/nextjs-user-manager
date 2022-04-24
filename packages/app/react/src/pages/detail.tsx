import { createListPageData, initialize, User, UserError } from "user-manager-business";
import Detail from '../common/detail'
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "src/hooks/use-selector";

export function DetailModule({id, navigate}: {
    id: number;
    navigate: (href: string) => void;
}) {
    const pageData = useMemo(createListPageData, []);
    const userSaved = useSelector(pageData.store, ({ users }) => users.find(u => u.id === id)); 
    const [user, onChange] = useState<User>({ id: 0 });
    const [errors, setErrors] = useState<UserError>({});

    useEffect(() => initialize(pageData.store), [pageData.store])
    useEffect(() => {
        userSaved ? onChange(userSaved) : onChange({ id });
    }, [userSaved])

    return <Detail saveUser={(u) => pageData.saveUser(u)} navigate={navigate} model={user} onChange={onChange} errors={errors} setErrors={setErrors}/>
}