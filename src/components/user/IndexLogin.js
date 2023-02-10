import React, { useState } from "react";
import Login from "./login/Login";
import Register from "./register/Register";

const IndexLogin = () => {
    const [isLogin, setIsLogin] = useState(true);

    return(
        <se>
            <div style={{ display: "flex", justifyContent: "center", gap : '2rem' }}>
                <button
                    className="btn btn-outline-success"
                    onClick={() => setIsLogin(true)}>Login</button>
                <button
                    className="btn btn-outline-secondary"
                    onClick={() => setIsLogin(false)}>Register</button>
            </div>
            {isLogin ? <Login /> : <Register />}
        </se>
    )
}

export default IndexLogin