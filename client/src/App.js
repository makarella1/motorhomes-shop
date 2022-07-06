import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';

import { paths } from './utils/paths';

const App = () => {
  return (
    <Routes>
      <Route path={paths.home} element={<HomePage />} />
    </Routes>
  );
};

export default App;
