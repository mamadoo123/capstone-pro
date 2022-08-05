import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component'
import CartDropdownItem from './cart-dropdown-item.component';
import './cart-dropdown.styles.scss'

function CartDropdown() {
    const {cartItems} = useContext(CartContext);
    
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

                <Button>
                    Go To Checkout
                </Button>
            </div>
        </div>
    )
}

export default CartDropdown;