import React from "react";

export default function Detail ({
    FirstNameInput, LastNameNameInput, BirthdayInput, LoginInput, PasswordInput, IsActifCheckbox,
    save, navigate, isUserActif, preventDefault
}: {
    FirstNameInput: JSX.Element;
    LastNameNameInput: JSX.Element;
    BirthdayInput: JSX.Element;
    LoginInput: JSX.Element;
    PasswordInput: JSX.Element;
    IsActifCheckbox: JSX.Element;
    save: () => Promise<number>;
    navigate: (location: string) => void;
    preventDefault: (e, callback: ()=>void) => void;
    isUserActif: boolean;
}) {
    return <div>
        <h1 className="title">Détail de l'utilisateur</h1> 
        <hr/>
        <div className="container">
            <form className="full-width center"  onSubmit={(e) => preventDefault(e, () => save().then(id => navigate(`/users/${id}`)))}>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Nom</span>
                    </div>
                    {LastNameNameInput}
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Prénom</span>
                    </div>
                    {FirstNameInput}
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Date de naissance</span>
                    </div>
                    {BirthdayInput}
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Login</span>
                    </div>
                    {LoginInput}
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Mot de passe</span>
                    </div>
                    {PasswordInput}
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            {IsActifCheckbox}
                        </div>
                    </div>
                    <span  className="form-control">{isUserActif && 'Actif' || 'Inactif'}</span>
                </div>

                <button type="submit" className="btn btn-primary full-width" data-content="Enregistrer l'utilisateur">Enregistrer</button>
            </form>
        </div>
    </div>
}


