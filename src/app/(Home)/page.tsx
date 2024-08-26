import { MainProducts } from "app/components/home/MainProducts";
import { Metadata } from "next";

export const metaData: Metadata = {
  title: "future world",
  description: "Welcome to the future world", 
  keywords: ["ecomerce", "future"]
}

export default function Home() {
  return (
    <MainProducts />
  )
}
