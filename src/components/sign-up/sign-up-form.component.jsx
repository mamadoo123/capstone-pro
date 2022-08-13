import { useState } from "react";
import firebaseUtils from "../../firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import './sign-up-form.styles.scss';

const initialFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm() {
  const [formFields, setFormFields] = useState(initialFormFields);

  const onChangeHandler = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const resetFormFields = () => {
    setFormFields(initialFormFields);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = formFields;
    if (password != confirmPassword) {
      alert("Your passwords do not match");
      return;
    }
    try {
      const { user } = await firebaseUtils.createUserDocWithEmailAndPassword(
        email,
        password
      );
      await firebaseUtils.createUserDocFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use")
        alert("Cannot create user, email is already in use");
      else console.log("user creation on sign up error ,", error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <span>Sing up with your email and password</span>
      <form onSubmit={onSubmitHandler}>
        <FormInput
            label="Display Name" 
            type="text"
            name="displayName"
            value={formFields["displayName"]}
            onChange={onChangeHandler}
            required
        />

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
        
        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formFields["confirmPassword"]}
          onChange={onChangeHandler}
          required
        />

        <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.google}>Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUpForm;
