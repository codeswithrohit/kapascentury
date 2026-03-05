import MainProductsPage from "../MainProductDetailPages/MainProductsPage";
import { useRouter } from "next/router";


export default function Category() {
      const router = useRouter();
  const { category } = router.query;
    console.log("Received category param:", category);


  return (
    <div>
     <MainProductsPage category={category} />
    </div>
  );
}