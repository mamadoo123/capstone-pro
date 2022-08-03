import {Link, Outlet} from 'react-router-dom'
import ROUTES from '../../../routes/ROUTES';
import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg';
import './navbar.styles.scss'
import { useContext } from 'react';
import { UserContext } from '../../../contexts/user.context';
import firebaseUtils from '../../../firebase/firebase.utils';

function NavBar() {
    const {currentUser, setCurrentUser} = useContext(UserContext)
    const logout = async (e) => {
        e.preventDefault();
        await firebaseUtils.signUserOut();
        setCurrentUser(null);
    }

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
                        <span className='nav-link' onClick={logout}>logout</span>
                        :
                        <Link to={ROUTES.INDEX+ROUTES.LOGIN} className="nav-link" >
                            login
                        </Link>
                    }
                    
                </div>


            </div>

            <Outlet />
        </>
    )
}

export default NavBar;
