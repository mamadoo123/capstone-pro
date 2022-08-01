import {Link, Outlet} from 'react-router-dom'
import ROUTES from '../../../routes/ROUTES';
import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg';
import './navbar.styles.scss'

function NavBar() {
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
                <Link to={ROUTES.INDEX+ROUTES.LOGIN} className="nav-link" >
                    login
                </Link>
                
            </div>


        </div>

        <Outlet />
    </>
  )
}

export default NavBar;
