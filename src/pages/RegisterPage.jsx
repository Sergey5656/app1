import {Link} from "react-router-dom";
import LoginPage from "./LoginPage";
import Register from "../components/SignUp";

const RegisterPage = () => {
    return (
        <div>
            <h1>Register</h1>
            <Register/>
            <p>
                У меня есть аккаунт <Link to={LoginPage}> Войти </Link>
            </p>
        </div>
    )
}

export default RegisterPage;