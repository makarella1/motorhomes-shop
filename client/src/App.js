import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import MotorhomePage from './pages/MotorhomePage';

import { paths } from './utils/paths';

const App = () => {
  return (
    <Routes>
      <Route path={paths.home} element={<HomePage />} />
      <Route path={`${paths.motorhome}/:id`} element={<MotorhomePage />} />
    </Routes>
  );
};

export default App;
