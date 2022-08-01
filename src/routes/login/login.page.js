import { createUserDocFromAuth, signInWithPrompt } from "../../firebase/firebase.utils"

function LoginPage() {
    const loginUserWithGoogle = async () => {
        const res = await signInWithPrompt();
        createUserDocFromAuth(res.user)
    }

    return (
        <div>
            <h1>LOGIN PAGE</h1>
            <button onClick={loginUserWithGoogle}>
                Login Now
            </button>
        </div>
    )
}

export default LoginPage
