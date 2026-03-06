import MainProductsPage from "../MainProductDetailPages/MainProductsPage";
import { useRouter } from "next/router";


export default function Category() {
      const router = useRouter();
  const { category } = router.query;
   


  return (
    <div>
     <MainProductsPage category={category} />
    </div>
  );
}