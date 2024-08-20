import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000",
});

export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export function fetchProducts() {
  return instance.get<Product[]>("/products");
}

export function fetchProductById(id: number) {
  return instance.get<Product>("/products", {
    params: { id },
  });
}

export function fetchCartItems() {
  return instance.get<Product[]>("/carts");
}

export function createCartItem(item: Product) {
  return instance.post<Product>("/carts", item);
}

export function removeCartItem(id: number) {
  return instance.delete(`/carts/${id}`);
}
