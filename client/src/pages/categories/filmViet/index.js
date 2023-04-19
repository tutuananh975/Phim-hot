import { FaturedMovies } from "@/data/FaturedMovies";
import ProductPage from "@/pages/components/ProductPage/ProductPage";
import MainLayout from "@/pages/layout/MainLayout";
import React from "react";

export default function index() {
  return (
    <MainLayout>
      <ProductPage data={FaturedMovies} />
    </MainLayout>
  );
}
