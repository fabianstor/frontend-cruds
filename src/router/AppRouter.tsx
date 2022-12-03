import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PrincipalMain } from '../components/PrincipalMain'
import { ProductPage } from '../pages/products/ProductPage';
import { CompaniesPage } from '../pages/companies/CompaniesPage';
import { PersonsPage } from '../pages/persons/PersonsPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={ <PrincipalMain /> } />
      <Route path="/products" element={ <ProductPage /> } />
      <Route path="/companies" element={ <CompaniesPage /> } />
      <Route path="/persons" element={ <PersonsPage /> } />
    </Routes>
  )
}
