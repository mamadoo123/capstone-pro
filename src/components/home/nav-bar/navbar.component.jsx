import {Outlet} from 'react-router-dom'
import ROUTES from '../../../routes/ROUTES';
import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg';
import {NavLink, NavLinksContainer, NavbarContainer} from './navbar.styles.js'
import { useContext } from 'react';
import { UserContext } from '../../../contexts/user.context';
import firebaseUtils from '../../../firebase/firebase.utils';
import CartIcon from '../../cart/cart-icon.component';
import CartDropdown from '../../cart/cart-dropdown.component';
import { CartContext } from '../../../contexts/cart.context';

function NavBar() {
    const {currentUser} = useContext(UserContext)
    const {dropdownOpen} = useContext(CartContext);

    return (
        <>
            <NavbarContainer>
                <div>
                    <NavLink to={ROUTES.INDEX}>
                        <CrwnLogo />
                    </NavLink>
                </div>
                <NavLinksContainer>
                    <NavLink to={ROUTES.INDEX+ROUTES.SHOP} className="nav-link" >
                        Shop
                    </NavLink>
                    {
                        currentUser ?
                        <NavLink as='span' onClick={firebaseUtils.signUserOut}>logout</NavLink>
                        :
                        <NavLink to={ROUTES.INDEX+ROUTES.LOGIN} >
                            login
                        </NavLink>
                    }

                    <CartIcon />
                    
                </NavLinksContainer>
            
            {
                dropdownOpen && <CartDropdown />
            }

            </NavbarContainer>

            <Outlet />
        </>
    )
}

export default NavBar;
