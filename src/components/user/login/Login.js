import React, {Component, useState} from 'react';
import Dashboard from "../../../pages/admin/Dashboard";
import Spacer15 from "../../ui/Spacer15";

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const baseUrl = "https://aled-weather.fr:8080/token"

    const returnPage = () => {
        Dashboard()
    }

    const handleSend = () => {
        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userEmail: email,
                userPassword: password
            })
        })
            .then(async (response) => {
                if (response.status === 200) {
                    let responseJson = await response.json();
                    console.log(responseJson);
                    setIsLoggedIn(true);
                    returnPage()
                } else {
                    console.log('Erreur de connexion');
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <>
            <input placeholder="userEmail" onChangeText={text => setEmail(text)}/>
            <inputt placeholder="userPassword" onChangeText={text => setPassword(text)}/>
            <button title="Envoyer" onPress={handleSend}/>
            <Spacer15 />
        </>
    );

}

export default Login;
