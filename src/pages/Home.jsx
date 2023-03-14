import { Navigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import React from "react";
const HomePage = ()=> {
    return (
        <div>
<Navigate to = "/login" />
        </div>
    )
}

export default HomePage