import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ProductPage } from '../pages/products/ProductPage';

export const ProductsRouter = () => {
  return (
    <Routes>
        <Route path="/products" element={ <ProductPage /> } />
    </Routes>
  )
}
