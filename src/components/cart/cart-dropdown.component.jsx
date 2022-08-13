import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes';
import Button from '../button/button.component'
import CartDropdownItem from './cart-dropdown-item.component';
import {DropdownContainer, CartItems, EmptyMessage} from './cart-dropdown.styles.js'

function CartDropdown() {
    const {cartItems, setDropdownOpen} = useContext(CartContext);
    const navigate = useNavigate();

    const onClickHandler = () => {
        setDropdownOpen(false);
        navigate(`/${ROUTES.CHECKOUT}`);
    }
    
    return(
        <DropdownContainer>
            <CartItems>
                {
                   cartItems.length > 0 ?
                        cartItems.map(cartItem => (
                            <CartDropdownItem item={cartItem} />
                        ))
                   :
                   <EmptyMessage>
                    You don't have any cart item
                   </EmptyMessage>

                }

                <Button onClick={onClickHandler}>
                    Go To Checkout
                </Button>
            </CartItems>
        </DropdownContainer>
    )
}

export default CartDropdown;