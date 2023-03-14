import {Form} from "./Form";
import {useDispatch} from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {setUser} from "../slices/user/userSlice";

const Login = () => {

    const dispatch = useDispatch();

const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then(console.log)
        .catch(console.error)
}

    return (
        <div>
            <Form
                tittle="sign in"
                handleClick={handleLogin}
/>
        </div>
    )
}

export {Login}