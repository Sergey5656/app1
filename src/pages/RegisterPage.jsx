import {Link} from "react-router-dom";
import LoginPage from "./LoginPage";
import {SignUp} from "../components/SignUp";

const RegisterPage = () => {
    return (
        <div>
            <h1>Register</h1>
            <SignUp/>
            <p>
                У меня есть аккаунт <Link to={LoginPage}> Войти </Link>
            </p>
        </div>
    )
}

export default RegisterPage;