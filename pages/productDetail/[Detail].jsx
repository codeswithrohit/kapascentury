import ProductLayout from "../individualProductDetail/ProductLayout";
import { useRouter } from "next/router";


export default function ProductDetail() {

  
  const router = useRouter();
  const { Detail } = router.query;
    

  return (
    <div>
    <ProductLayout Detail={Detail}/>
    </div>
  );
}
