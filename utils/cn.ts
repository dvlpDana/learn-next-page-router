import { ClassValue, clsx } from "clsx"; // clsx 라이브러리
import { twMerge } from "tailwind-merge"; // tailwind-merge 라이브러리

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
