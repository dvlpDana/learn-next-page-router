import React, { useEffect } from "react";
import ProductList from "@/components/ProductList";
import BasicLayout from "@/layouts/BasicLayout";
import useStore from "@/stores/useStore";

function ProductPage() {
  const { products, fetchProducts } = useStore();

  useEffect(() => {
    fetchProducts(); // 컴포넌트가 마운트될 때 제품 목록을 가져옵니다.
  }, [fetchProducts]);

  return (
    <BasicLayout>
      <h1 className="text-2xl font-bold mb-4">상품 목록</h1>
      <ProductList products={products} />
    </BasicLayout>
  );
}

export default ProductPage;
