import Link from "next/link";
import Image from "next/image";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip"; // Shadcn Tooltip 컴포넌트
import React from "react";

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <TooltipProvider>
      {" "}
      {/* TooltipProvider로 감싸기 */}
      <div className="container mx-auto mt-8">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products &&
            products.map(({ imageUrl, name, id }, index) => (
              <li
                className="relative rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out p-4 bg-white"
                key={index}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href={`/products/${id}`} className="block">
                      <div className="overflow-hidden rounded-t-lg mb-4">
                        <Image
                          src={imageUrl}
                          width={250}
                          height={250}
                          alt={name}
                          className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="text-center text-lg font-semibold text-gray-800">
                        {name}
                      </div>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    className="p-2 bg-gray-700 text-white rounded-md shadow-lg"
                    side="top"
                    align="center"
                    sideOffset={5}
                  >
                    {name}
                  </TooltipContent>
                </Tooltip>
              </li>
            ))}
        </ul>
      </div>
    </TooltipProvider>
  );
};

export default ProductList;
