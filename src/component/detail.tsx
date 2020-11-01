import React, { useState } from "react";
import ToolService from 'src/domain/api/tool.service';

export default function({tool, save, navigate}: {
    tool: ToolService,
    save: (user: User) => Promise<number>;
    navigate: (location: string) => void;
}) {
    return function Detail ({user, errors}: {user: User & Account, errors: UserError }) {
        var [date, setDate] = useState('');
        return <div>
            <h1 className="title">Détail de l'utilisateur</h1> 
            <hr/>
            <div className="container">
                <form className="full-width center"  onSubmit={(e) => tool.preventDefault(e, () => save(user).then(id => navigate(`/users/${id}`)))}>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Nom</span>
                        </div>
                        <input type="text" 
                            value={user.lastName} 
                            onChange={(e) => { 
                                errors.lastNameError = '';
                                user.lastName = e.target.value;
                            }}
                            className={`form-control ${errors.lastNameError && 'has-error animated rubberBand' || ''}`}
                            placeholder="Lastname" 
                        />            
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Prénom</span>
                        </div>
                        <input type="text" 
                            value={user.firstName} 
                            onChange={(e) => { 
                                errors.firstNameError = '';
                                user.firstName = e.target.value;
                            }}
                            className={`form-control ${errors.firstNameError && 'has-error animated rubberBand' || ''}`}
                            placeholder="Firstname" 
                        />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Date de naissance</span>
                        </div>
                        <input type="text" 
                            value={tool.toDateString(user.birthdate) || date} 
                            onChange={(e) => { 
                                errors.birthdateError = '';
                                user.birthdate = tool.parseDate(e.target.value);
                                setDate(e.target.value);
                            }} 
                            className={`form-control ${errors.birthdateError && 'has-error animated rubberBand' || ''}`}
                            placeholder="Birthday"
                        />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Login</span>
                        </div>
                        <input type="text" 
                            disabled={!!user.id} 
                            value={user.login} 
                            onChange={(e) => { 
                                errors.loginError = '';
                                user.login = e.target.value;
                            }} 
                            className={`form-control ${errors.loginError && 'has-error animated rubberBand' || ''}`} 
                            placeholder="Login" 
                        />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Mot de passe</span>
                        </div>
                        <input type="password" 
                            disabled={!!user.id} 
                            value={user.password} 
                            onChange={(e) => { 
                                errors.passwordError = '';
                                user.password = e.target.value;
                            }}
                            className={`form-control ${errors.passwordError && 'has-error animated rubberBand' || ''}`} 
                            placeholder="Password" 
                        />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="checkbox" checked={user.isActif} onChange={(e) => user.isActif = e.target.checked} aria-label="Checkbox for following text input" />
                            </div>
                        </div>
                        <span  className="form-control">{user.isActif && 'Actif' || 'Inactif'}</span>
                    </div>

                    <button type="submit" className="btn btn-primary full-width" data-content="Enregistrer l'utilisateur">Enregistrer</button>
                </form>
            </div>
        </div>
    }
}