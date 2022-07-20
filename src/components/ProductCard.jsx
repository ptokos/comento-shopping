import styled from "styled-components";

const ProductCard = ({ name, description, thumbnail, onClick }) => {
  return (
    <ProductCardStyled onClick={onClick}>
      <img width="200" src={thumbnail} alt={name} />

      <NameStyled> {name} </NameStyled>
      <DesStyled>{description}</DesStyled>
    </ProductCardStyled>
  );
};

const ProductCardStyled = styled.div`
  padding: 40px;
`;

const NameStyled = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;

  color: #000000;
`;
const DesStyled = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  color: #000000;
`;
export default ProductCard;
