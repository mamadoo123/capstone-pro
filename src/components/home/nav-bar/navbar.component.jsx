import {Link, Outlet} from 'react-router-dom'
import ROUTES from '../../../routes/ROUTES';
import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg';
import './navbar.styles.scss'
import { useContext } from 'react';
import { UserContext } from '../../../contexts/user.context';
import firebaseUtils from '../../../firebase/firebase.utils';
import CartIcon from '../../cart/cart-icon.component';
import CartDropdown from '../../cart/cart-dropdown.component';
import { CartContext } from '../../../contexts/cart.context';

function NavBar() {
    const {currentUser} = useContext(UserContext)
    const {dropdownOpen, setDropdownOpen} = useContext(CartContext);

    return (
        <>
            <div className='navbar-container'>
                <div className='logo-container'>
                    <Link to={ROUTES.INDEX}>
                        <CrwnLogo />
                    </Link>
                </div>
                <div className='nav-links-container'>
                    <Link to={ROUTES.INDEX+ROUTES.SHOP} className="nav-link" >
                        Shop
                    </Link>
                    {
                        currentUser ?
                        <span className='nav-link' onClick={firebaseUtils.signUserOut}>logout</span>
                        :
                        <Link to={ROUTES.INDEX+ROUTES.LOGIN} className="nav-link" >
                            login
                        </Link>
                    }

                    <CartIcon />
                    
                </div>
            
            {
                dropdownOpen && <CartDropdown />
            }

            </div>

            <Outlet />
        </>
    )
}

export default NavBar;
