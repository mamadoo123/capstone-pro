import { SignInForm, SignUpForm } from "../../components";
import './login-page.styles.scss'

function LoginPage() {

    return (
        <div className="login-page-container">
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default LoginPage
