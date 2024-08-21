import create from "zustand";
import {
  fetchProducts,
  fetchProductById,
  fetchCartItems,
  createCartItem,
  removeCartItem,
  Product,
} from "@/api";

// Zustand 상태와 액션을 정의하는 인터페이스
interface StoreState {
  products: Product[];
  cartItems: Product[];
  product: Product | null;
  fetchProducts: () => Promise<void>;
  fetchProductById: (id: number) => Promise<void>;
  fetchCartItems: () => Promise<void>;
  createCartItem: (item: Product) => Promise<void>;
  removeCartItem: (id: number) => Promise<void>;
}

const useStore = create<StoreState>((set) => ({
  products: [],
  cartItems: [],
  product: null,

  fetchProducts: async () => {
    try {
      const response = await fetchProducts();
      set({ products: response.data });
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  },

  fetchProductById: async (id: number) => {
    try {
      const { data } = await fetchProductById(id); // id를 number로 변환하여 전달
      set({ product: Array.isArray(data) ? data[0] : data });
    } catch (error) {
      console.error(`Failed to fetch product with id ${id}`, error);
      set({ product: null });
    }
  },

  fetchCartItems: async () => {
    try {
      const response = await fetchCartItems();
      set({ cartItems: response.data });
    } catch (error) {
      console.error("Failed to fetch cart items", error);
    }
  },

  createCartItem: async (item: Product) => {
    try {
      const response = await createCartItem(item);
      set((state) => ({ cartItems: [...state.cartItems, response.data] }));
    } catch (error) {
      console.error("Failed to create cart item", error);
    }
  },

  removeCartItem: async (id: number) => {
    // id를 string으로 변경
    try {
      await removeCartItem(id);
      set((state) => ({
        cartItems: state.cartItems.filter((item) => item.id !== id),
      }));
    } catch (error) {
      console.error(`Failed to remove cart item with id ${id}`, error);
    }
  },
}));

export default useStore;
