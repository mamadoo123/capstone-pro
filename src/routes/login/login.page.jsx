import { SignUpForm } from "../../components";
import FireBaseUtils from "../../firebase/firebase.utils"

function LoginPage() {
    const loginUserWithGoogle = async () => {
        const res = await FireBaseUtils.signInWithPrompt();
        FireBaseUtils.createUserDocFromAuth(res.user)
    }

    return (
        <div>
            <h1>LOGIN PAGE</h1>
            <button onClick={loginUserWithGoogle}>
                Login With Popup
            </button>

            <SignUpForm />
        </div>
    )
}

export default LoginPage
