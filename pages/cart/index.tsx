import React, { useEffect } from "react";
import CartHeader from "@/components/cart/CartHeader";
import CartList from "@/components/cart/CartList";
import BasicLayout from "@/layouts/BasicLayout";
import useStore from "@/stores/useStore";

const CartPage: React.FC = () => {
  const { cartItems, fetchCartItems } = useStore();

  useEffect(() => {
    fetchCartItems(); // 장바구니 데이터를 가져옴
  }, [fetchCartItems]);

  return (
    <BasicLayout>
      <CartHeader />
      <CartList carts={cartItems} />
    </BasicLayout>
  );
};

export default CartPage;
