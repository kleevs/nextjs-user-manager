import ListingComponent from './list';
import React from 'react';
import { preventDefault, stopPropagation } from '../../tools/dom';
import { dateToString } from '../../tools/format';
import { User } from 'user-manager-business/src/type/user';
import { removeUser } from 'user-manager-business/src/service/user';
import Panel from '../../component/panel-component';
import Table from '../../component/table-component';
import { Link } from "../../style";

export default function List({users, navigate}: {
    users: User[];
    navigate: (href: string) => void;
}) { 
    return <ListingComponent 
        Panel={Panel}
        Table={Table}
        Link={Link}
        users={users}
        toDateString={(v) => dateToString(v, '')}
        stopPropagation={stopPropagation}
        preventDefault={preventDefault}
        removeUser={(id) => removeUser(id).then(_ => {})}
        navigate={navigate}
    />
}