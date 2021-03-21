import { User } from "user-manager-business/src/type/user";
import { Body, Header, Row, Table, Cellule } from "user-manager-style/src/table";
import { Link } from "user-manager-style/src/clickable";
import React from "react";

export default function List ({removeUser, navigate, users, toDateString, stopPropagation}: {
    toDateString: (v: Date) => string;
    stopPropagation: (e, callback: () => void) => void;
    removeUser: (id: number) => Promise<void>;
    navigate: (location: string) => void;
    users: User[];
}) {
    return <div> 
        <h1 className="title">Liste des utilisateurs</h1> 
        <hr/>
        <div className="container">
            <Table className="user-table table table-striped table-hover"> 
                {/* <Header> 
                    <Row> 
                        <Cellule>Nom</Cellule> 
                        <Cellule>Prénom</Cellule> 
                        <Cellule>Date de naissance</Cellule> 
                        <Cellule>Login</Cellule> 
                        <Cellule>Actif</Cellule> 
                        <Cellule></Cellule>
                    </Row> 
                </Header>  */}
                {/* <Body> 
                {users.map((_, i) => 
                    <Row key={i.toString()} className="clickable" onClick={() => navigate(`users/${_.id}`)}>
                        <Cellule>{_.lastName}</Cellule>
                        <Cellule>{_.firstName}</Cellule>
                        <Cellule>{toDateString(_.birthdate)}</Cellule>
                        <Cellule>{_.login}</Cellule>
                        <Cellule>{_.isActif ? "actif" : "inactif"}</Cellule>
                        <Cellule>
                            <Link className="fa fa-trash clickable" 
                                data-content="Suppression"
                                // onMouseOver={(e) => attention(e)} 
                                onClick={(e) => stopPropagation(e, () => removeUser(_.id).then(() => navigate('/')))}>
                            </Link>
                        </Cellule>
                    </Row> 
                )}
                </Body>  */}
            </Table> 
            <Link href="/users" className="btn btn-primary full-width attention-hover">Nouvel utilisateur</Link>
        </div>
    </div>
}