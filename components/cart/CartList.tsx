import Image from "next/image";
import React from "react";
import { formatNumberWithDecimalPoint } from "@/utils/format";
import { useRouter } from "next/router";
import useStore from "@/stores/useStore";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip"; // Shadcn Tooltip 컴포넌트
import { Button } from "@/components/ui/button"; // Shadcn Button 컴포넌트

interface CartListProps {
  carts: {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
  }[];
}

const CartList: React.FC<CartListProps> = ({ carts }) => {
  const router = useRouter();
  const { removeCartItem } = useStore();

  const totalAmount = carts.length;
  const totalPrice = carts.reduce((acc, cur) => acc + Number(cur.price), 0);

  const removeCart = async (id: number) => {
    try {
      await removeCartItem(id);
      alert(`상품이 삭제 되었습니다.`);
      router.replace(router.asPath); // 현재 페이지를 다시 로드하여 상태 갱신
    } catch (error) {
      console.error("Failed to remove cart item", error);
    }
  };

  return (
    <TooltipProvider>
      {" "}
      {/* TooltipProvider로 감싸기 */}
      <div className="p-5 w-full max-w-md mx-auto bg-white shadow-md rounded-md">
        <ul>
          {carts.map(({ id, name, price, imageUrl }) => (
            <li key={id} className="flex mb-4">
              <div>
                <Image
                  width={100}
                  height={100}
                  src={imageUrl}
                  alt={name}
                  className="rounded-md"
                />
              </div>
              <div className="flex flex-col justify-center pl-3">
                <p className="text-lg font-medium">{name}</p>
                <p className="text-gray-500">
                  {price}
                </p>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="destructive"
                      className="mt-2"
                      onClick={() => removeCart(id)}
                    >
                      삭제하기
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="p-2 bg-gray-700 text-white rounded-md shadow-lg">
                    이 항목을 장바구니에서 삭제합니다.
                  </TooltipContent>
                </Tooltip>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-end pt-3">
          <p className="text-lg font-medium">총 수량: {totalAmount}</p>
          <p className="text-lg font-semibold">
            총 가격: {formatNumberWithDecimalPoint(totalPrice)}
          </p>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default CartList;
