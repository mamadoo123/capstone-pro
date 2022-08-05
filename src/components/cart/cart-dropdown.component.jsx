import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component'
import './cart-dropdown.styles.scss'


function CartDropdown() {
    const {setDropdownOpen} = useContext(CartContext);
    
    return(
        <div className="dropdown-container">
            <div className="cart-items">
                <Button onClick={() => setDropdownOpen(false)}>
                    Go To Checkout
                </Button>
            </div>
        </div>
    )
}

export default CartDropdown;