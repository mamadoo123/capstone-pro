import {BaseButton, GoogleSingInButton, InvertedButton} from './button.styles.js'

// we can crete a variable for button type
export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted'
}

const getButton = (btnType = BUTTON_TYPE_CLASSES.base) => ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSingInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
})[btnType];

function Button({children, buttonType, ...otherProps}){
    const CustomeButton = getButton(buttonType);
    return(
        <CustomeButton {...otherProps}>
            {children}
        </CustomeButton>
    )
}

export default Button;