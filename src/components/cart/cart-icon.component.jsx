import './cart-icon.styles.scss'
import {ReactComponent as ShoppingBagIcon} from '../../assets/shopping-bag.svg'
import {useContext} from 'react';
import { CartContext } from '../../contexts/cart.context';

function CartIcon(){
    const {setDropdownOpen, dropdownOpen} = useContext(CartContext);

    return(
        <div 
            className="cart-icon-container" 
            onClick={() => setDropdownOpen(!dropdownOpen)}
        >
            <ShoppingBagIcon className='shopping-bag-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;