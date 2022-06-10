import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Gallery, Contacts } from 'pages';
import { Header } from 'components';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index path="/" element={<Gallery />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
