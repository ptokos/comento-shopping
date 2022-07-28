import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import { getProductDetail } from "../data/mockData";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
  let { productId } = useParams();
  const [product, setProduct] = useState();
  const navigate = useNavigate();
  const [activeButtonId, setActiveButtonId] = useState(1);

  useEffect(() => {
    const result = getProductDetail(productId);
    setProduct(result);
  }, []);

  const onClickDetailButton = (buttonId) => {
    setActiveButtonId(buttonId);
  };

  return (
    <ProductDetailStyled>
      <button type="button" onclick={() => navigate(-1)}>
        {" < "}
      </button>
      <Navigation />
      {product && (
        <>
          <img src={product.thumbnail} width="390" />
          <NameStyled>{product.name}</NameStyled>
          <PriceStyled>{product.price}</PriceStyled>
        </>
      )}
      <GrayLine></GrayLine>
      <ButtonSection>
        <DetailButton1 onClick={() => onClickDetailButton(1)}>
          상품 설명
        </DetailButton1>
        <DetailButton2 onClick={() => onClickDetailButton(2)}>
          상품 후기
        </DetailButton2>
      </ButtonSection>
      {activeButtonId === 1 && <div>상품설명</div>}
      {activeButtonId === 2 && <div>후기내용</div>}
      <GrayLine></GrayLine>
    </ProductDetailStyled>
  );
};

const DetailButton1 = styled.div`
  background-color: #eeeeee;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  padding: 14px 66px;

  color: #000000;
`;

const DetailButton2 = styled.div`
  background-color: #ffffff;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  padding: 14px 66px;

  color: #000000;
`;

const ButtonSection = styled.div`
  display: flex;
  gap: 0px;
`;

const GrayLine = styled.div`
  width: 390px;
  height: 1px;
  left: 0px;
  top: -1px;

  background: #eeeeee;
`;

const ProductDetailStyled = styled.div``;

const NameStyled = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;

  margin: 24px 229px 8px 24px;

  color: #000000;
`;

const PriceStyled = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  margin: 8px 303px 24px 24px;

  color: #000000;
`;

export default ProductDetail;
