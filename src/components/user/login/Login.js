import React, {useState} from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://aled-weather.fr:8080/token', {
                userEmail: email,
                userPassword: password,
            }, {
                headers: {

                },
            });

            if (response.status === 200) {
                setSuccess(true);
                setError(null);
            }
        } catch (err) {
            setError(err.message);
            setSuccess(false);
        }
    };

    return (
        <div className="container-fluid">
            <div className="container d-flex justify-content-center align-items-center flex-column flex-lg-column">

                {success && (
                    <p>Connexion réussie !</p>
                )}
                {error && (
                    <p>Erreur : {error}</p>
                )}
                <form onSubmit={handleSubmit}
                      style={{
                          display : "flex",
                          justifyContent : "center",
                          alignItems : "center",
                          flexDirection : "column",
                          gap : "2rem",
                          height : '66.35vh'
                      }}
                >
                    <input
                        className="input-group-text"
                        type="email"
                        placeholder="Adresse email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="input-group-text"
                        type="password"
                        placeholder="Mot de passe"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="btn btn-outline-secondary"
                    >
                        Se connecter</button>
                </form>
            </div>
        </div>
    );
};

export default Login;