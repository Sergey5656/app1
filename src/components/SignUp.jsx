import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {useDispatch} from "react-redux";
import {Form} from "./Form";
import {setUser} from "../slices/user/userSlice";

const SignUp = () => {
const dispatch = useDispatch();
    const handleRegister = (email, password) => {
        const auth = getAuth();
        console.log(auth);
        createUserWithEmailAndPassword(auth, email, password)
            .then(console.log)
            .catch(console.error)
    }
    return (

<Form
    tittle="register"
    handleClick={handleRegister}
        />
    )
}

export {SignUp}