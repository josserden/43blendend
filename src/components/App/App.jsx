import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from '../Header/Header';
import { CountrySearch, Home } from '../../pages';
import { Country } from '../../pages/Country';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index path="/" element={<Home />} />
        <Route path="/country" element={<CountrySearch />} />
        <Route path="/country/:id" element={<Country />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
