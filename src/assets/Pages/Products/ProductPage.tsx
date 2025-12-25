import FormAddProduct from "@/assets/Components/Products/Components/FormAddProducts";
import ProductTable from "@/assets/Components/Products/Components/ProductTable";
import { useState } from "react";

export default function ProductPage() {
  const [seletcedProduct , setSelectedProduct] = useState<IProduct | null>(null)
  console.log(seletcedProduct);
  
  return (
    <div className="flex flex-col gap-10">
        <FormAddProduct seletcedProduct={seletcedProduct} setSelectedProduct={setSelectedProduct}/>
        <ProductTable seletcedProduct={seletcedProduct} setSelectedProduct={setSelectedProduct} />
    </div>
  )
}
