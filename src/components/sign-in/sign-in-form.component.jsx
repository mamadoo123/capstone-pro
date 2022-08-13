import { useState } from "react";
import firebaseUtils from "../../firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import './sign-in-form.styles.scss';

const initialFormFields = {
  email: "",
  password: "",
};

function SignInForm() {

  const [formFields, setFormFields] = useState(initialFormFields);

  const onChangeHandler = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const resetFormFields = () => {
    setFormFields(initialFormFields);
  };

  const onSubmitHandler = async (e) => {
      e.preventDefault();
      const { email, password } = formFields;
      if (!password || !email) {
          alert("Please fill the required fields");
          return;
      }
      try {
          await firebaseUtils.signInWithEmailAndPass(email,password);
          resetFormFields();
      } catch (error) {
          switch (error.code) {
            case 'auth/wrong-password':
              alert("incorrect password for that email")
              return;
            
            case 'auth/user-not-found':
              alert('this email does not exist, please register first')
              return;

            default:
              alert('something went wrong, please try again')
              console.log(error)
              return;
          }
      }
  };


  const loginUserWithGoogle = async () => {
    const res = await firebaseUtils.signInWithPrompt();
    firebaseUtils.createUserDocFromAuth(res.user)
  }

  return (
    <div className="sign-in-container">
      
      <form onSubmit={onSubmitHandler}>

        <FormInput
            label="Email"
            type="email"
            name="email"
            value={formFields["email"]}
            onChange={onChangeHandler}
            required
        />
        
        <FormInput
            label="Password"
            type="password"
            name="password"
            value={formFields["password"]}
            onChange={onChangeHandler}
            required
        />

        <div className="button-group-container">
            <Button type="submit">
                Sign In
            </Button>

            <Button type="button" onClick={loginUserWithGoogle} buttonType={BUTTON_TYPE_CLASSES.google}>
                Google Sign in
            </Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
