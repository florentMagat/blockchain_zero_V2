import { Route, Routes } from 'react-router-dom';
import Layout from './Composants/Layout';
import HomePage from './Pages/HomePage';
import Categories from './Pages/Categories';
import Simulateur from './Pages/Simulateur';
import Trending from './Pages/Trending';
import Exchanges from './Pages/Exchanges';
import Holdings from './Pages/Holdings';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/simulateur" element={<Simulateur />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/holdings" element={<Holdings />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
