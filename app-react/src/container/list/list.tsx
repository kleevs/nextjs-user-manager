import { User } from "user-manager-business/src/type/user";
import * as React from "react";

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
            <table className="user-table table table-striped table-hover"> 
                <thead> 
                    <tr> 
                        <td>Nom</td> 
                        <td>Prénom</td> 
                        <td>Date de naissance</td> 
                        <td>Login</td> 
                        <td>Actif</td> 
                        <td></td>
                    </tr> 
                </thead> 
                <tbody> 
                {users.map((_, i) => 
                    <tr key={i.toString()} className="clickable" onClick={() => navigate(`users/${_.id}`)}>
                        <td>{_.lastName}</td>
                        <td>{_.firstName}</td>
                        <td>{toDateString(_.birthdate)}</td>
                        <td>{_.login}</td>
                        <td>{_.isActif ? "actif" : "inactif"}</td>
                        <td>
                            <a className="fa fa-trash clickable" 
                                data-content="Suppression"
                                // onMouseOver={(e) => attention(e)} 
                                onClick={(e) => stopPropagation(e, () => removeUser(_.id).then(() => navigate('/')))}>
                            </a>
                        </td>
                    </tr> 
                )}
                </tbody> 
            </table> 
            <a href="/users" className="btn btn-primary full-width attention-hover" >Nouvel utilisateur</a>
        </div>
    </div>
}