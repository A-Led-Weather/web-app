import React, { useState } from 'react';
import styles from './Register.module.css'

const Register = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const baseUrl = 'https://aled-weather.fr:8080/users';

    const handleSubmit = event => {
        event.preventDefault();

        fetch(baseUrl, {
            method: 'POST',
            headers: {

            },
            body: JSON.stringify({
                userName: user,
                userEmail: email,
                userPassword: password,
            }),
        })
            .then(response => {
                if (response.status === 400) {
                    setError("L'adresse email n'est pas valide");
                    return;
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setSuccess(true);
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            });
    };

    return (
        <section className="container-fluid">
            <div className="container"
            >
                <form onSubmit={handleSubmit}
                      style={{
                          display : "flex",
                          justifyContent : "center",
                          alignItems : "center",
                          flexDirection : "column"
                      }}>
                    <input
                        placeholder="userName"
                        value={user}
                        onChange={event => setUser(event.target.value)}
                        name="userName"
                    />
                    <input
                        placeholder="userEmail"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        name="userEmail"
                    />
                    <input
                        placeholder="userPassword"
                        type="password"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        name="userPassword"
                    />
                    {error && <div className="alert alert-danger">{error}</div>}
                    {success && <div className="alert alert-success">L'utilisateur a été enregistré avec succès</div>}
                    <button type="submit" className="btn btn-dark" title="Envoyer">
                        Envoyer
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Register;