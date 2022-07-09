import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import MotorhomePage from './pages/MotorhomePage';
import FormPage from './pages/FormPage';

import { paths } from './utils/paths';
import OrderPage from './pages/OrderPage';

const App = () => {
  return (
    <Routes>
      <Route path={paths.home} element={<HomePage />} />
      <Route path={`${paths.motorhome}/:id`} element={<MotorhomePage />} />
      <Route path={paths.create} element={<FormPage />} />
      <Route path={paths.order} element={<OrderPage />} />
    </Routes>
  );
};

export default App;
