import ListingComponent from './list';
import React from 'react';
import { stopPropagation } from '../../tools/dom';
import { dateToString } from '../../tools/format';
import { User } from 'user-manager-business/src/type/user';
import { removeUser } from 'user-manager-business/src/service/user';
import Panel from '../../component/panel';
import Table from '../../component/table';
import { Link } from "user-manager-style/src/clickable";

export default function List({users}: {
    users: User[] 
}) { 
    return <ListingComponent 
        Panel={Panel}
        Table={Table}
        Link={Link}
        users={users}
        toDateString={(v) => dateToString(v, '')}
        stopPropagation={stopPropagation}
        removeUser={(id) => removeUser(id).then(_ => {})}
        navigate={(href) => location.href = href}
    />;
}