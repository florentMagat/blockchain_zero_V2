import { Routes, Route } from 'react-router-dom';
import App from './App';
import ErrorPage from './Pages/ErrorPage';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/error" element={<ErrorPage />} />
    </Routes>
  );
}

export default AppRouter;
