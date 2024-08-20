import { GetServerSideProps } from "next";
import ProductDetail from "@/components/ProductDetail";
import BasicLayout from "@/layouts/BasicLayout";
import React, { useEffect } from "react";
import useStore from "@/stores/useStore";

interface ProductDetailPageProps {
  id: number;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ id }) => {
  const { product, fetchProductById } = useStore();

  useEffect(() => {
    fetchProductById(id);
  }, [id, fetchProductById]);

  if (!product) {
    return (
      <BasicLayout>
        <p>상품을 찾을 수 없습니다.</p>
      </BasicLayout>
    );
  }

  return (
    <BasicLayout>
      <ProductDetail product={product} />
    </BasicLayout>
  );
};

// 페이지 라우터의 데이터 호출 함수 : getServerSideProps
export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;

  return {
    props: {
      id,
    },
  };
};

export default ProductDetailPage;
