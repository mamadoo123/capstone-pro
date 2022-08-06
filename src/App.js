import {Routes, Route} from 'react-router-dom'
import { NavBar } from './components';
import {HomePage, ShopPage, ROUTES, LoginPage, CheckoutPage} from './routes';

function App() {
  return (
    <Routes>
      <Route path= {ROUTES.INDEX} element={<NavBar />} >
        <Route index element={<HomePage/>} />
        <Route path={ROUTES.SHOP} element={<ShopPage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.CHECKOUT} element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
}

export default App;
