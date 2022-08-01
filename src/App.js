import {Routes, Route} from 'react-router-dom'
import { NavBar } from './components';
import {HomePage, ShopPage, ROUTES, LoginPage} from './routes';

function App() {
  return (
    <Routes>
      <Route path= {ROUTES.INDEX} element={<NavBar />} >
        <Route index element={<HomePage/>} />
        <Route path={ROUTES.SHOP} element={<ShopPage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
