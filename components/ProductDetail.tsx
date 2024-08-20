import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import useStore from "@/stores/useStore";
import { Button } from "@/components/ui/button"; // Shadcn Button 컴포넌트
import { Product } from "@/api"; // Product 타입 정의

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const { imageUrl, price, name } = product;
  const router = useRouter();
  const { createCartItem } = useStore(); // 상태 관리 함수 가져오기

  const addCart = async () => {
    try {
      createCartItem(product); // useStore의 상태 관리 함수 사용
      alert(`${name}가 장바구니에 담겼습니다`);
      router.push("/cart");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-4">상품 상세 페이지</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
        <div className="flex-shrink-0">
          <Image
            src={imageUrl}
            width={250}
            height={250}
            alt={name}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="text-center md:text-left">
          <p className="text-xl font-semibold">{name}</p>
          <p className="text-lg text-gray-600 mt-2 mb-4">
            {price} 원
          </p>
          <Button
            onClick={addCart}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
          >
            장바구니에 담기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
