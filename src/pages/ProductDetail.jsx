import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { productId } = useParams();
  return <div> 상품상세 페이지 </div>;
};

export default ProductDetail;
