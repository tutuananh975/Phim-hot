import ProductPage from "@/components/ProductPage/ProductPage";
import { FaturedMovies } from "@/data/FaturedMovies";
import MainLayout from "@/pages/layout/MainLayout";
import React from "react";

export default function index() {
  return (
    <MainLayout>
      <ProductPage data={FaturedMovies} />
    </MainLayout>
  );
}
