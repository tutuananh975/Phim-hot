import ProductPage from '@/pages/components/ProductPage/ProductPage';
import React from 'react';
import {FaturedMovies} from '../../../data/FaturedMovies'
import MainLayout from '@/pages/layout/MainLayout';

export default function index() {
  return (
    <MainLayout>
        <ProductPage data={FaturedMovies}/>
    </MainLayout>
  )
}