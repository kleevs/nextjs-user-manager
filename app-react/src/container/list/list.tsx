import { User } from "user-manager-business/src/type/user";
import { Link } from "user-manager-style/src/clickable";
import React from "react";
import Panel from "../../component/panel";
import { Table, Header, Body, Row, Cellule } from "user-manager-style/src/table";

export default function List ({removeUser, navigate, users, toDateString, stopPropagation}: {
    toDateString: (v: Date) => string;
    stopPropagation: (e, callback: () => void) => void;
    removeUser: (id: number) => Promise<void>;
    navigate: (location: string) => void;
    users: User[];
}) {
    return <Panel Title={<>Liste des utilisateurs</>}>
        <Table>
            <Header> 
                <Row> 
                    <Cellule>Nom</Cellule>
                    <Cellule>Prénom</Cellule>
                    <Cellule>Date de naissance</Cellule>
                    <Cellule>Login</Cellule>
                    <Cellule>Actif</Cellule>
                    <Cellule></Cellule>
                </Row> 
            </Header> 
            <Body>
                {users.map((_,i) => <Row key={i}>
                    <Cellule>{_.lastName}</Cellule>, 
                    <Cellule>{_.firstName}</Cellule>, 
                    <Cellule>{toDateString(_.birthdate)}</Cellule>, 
                    <Cellule>{_.login}</Cellule>, 
                    <Cellule>{_.isActif ? "actif" : "inactif"}</Cellule>, 
                    <Link onClick={(e) => stopPropagation(e, () => removeUser(_.id).then(() => navigate('/')))} />
                </Row>)}
            </Body>
        </Table>
        <Link href="/users">Nouvel utilisateur</Link>
    </Panel>
}