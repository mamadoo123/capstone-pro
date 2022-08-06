import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes';
import Button from '../button/button.component'
import CartDropdownItem from './cart-dropdown-item.component';
import './cart-dropdown.styles.scss'

function CartDropdown() {
    const {cartItems, setDropdownOpen} = useContext(CartContext);
    const navigate = useNavigate();

    const onClickHandler = () => {
        setDropdownOpen(false);
        navigate(`/${ROUTES.CHECKOUT}`);
    }
    
    return(
        <div className="dropdown-container">
            <div className="cart-items">
                {
                   cartItems.length > 0 ?
                        cartItems.map(cartItem => (
                            <CartDropdownItem item={cartItem} />
                        ))
                   :
                   <div className="empty-message">
                    You don't have any cart item
                   </div>

                }

                <Button onClick={onClickHandler}>
                    Go To Checkout
                </Button>
            </div>
        </div>
    )
}

export default CartDropdown;