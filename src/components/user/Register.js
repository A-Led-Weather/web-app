import React, {Component, useState} from 'react';

const Register = () => {

    const [user, setUser] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const baseUrl = "https://aled-weather.fr:8080/users"

    const handleSend = () => {
        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName: user,
                userEmail: email,
                userPassword: password
            })
        })
            .then((response) => {
                console.log("POST RESPONSE: " + JSON.stringify(response));
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <>
            <input placeholder="userName" onChangeText={text => setUser(text)}/>
            <input placeholder="userEmail" onChangeText={text => setEmail(text)}/>
            <input placeholder="userPassword" onChangeText={text => setPassword(text)}/>
            <button title="Envoyer" onPress={handleSend}/>
        </>
    );
}

export default Register;
