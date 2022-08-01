import styled from "styled-components";

const BasketItem = ({ thumbnail, name, price, onClickRemoveButton }) => {
  return (
    <>
      <BasketItemStyled>
        <RowLayout>
          <RowLayout>
            <ProductImage styled={{ backgroundImage: `url(${thumbnail})` }} />
            <ColumLayout>
              <ProductName>{name}</ProductName>
              <div>{price}</div>
            </ColumLayout>
          </RowLayout>
          <CloseButton onClick={onClickRemoveButton}>X</CloseButton>
        </RowLayout>
      </BasketItemStyled>
      <GrayLine />
    </>
  );
};

export default BasketItem;

const BasketItemStyled = styled.div`
  padding: 16px;
  margin: 10px 0px;
`;

const RowLayout = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

const ColumLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductImage = styled.div`
  width: 120px;
  height: 100px;
  background-size: cover;
  background-position: center;
`;

const CloseButton = styled.div`
  cursor: pointer;
`;

const ProductName = styled.div`
  font-size: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: #000000;
`;

const GrayLine = styled.div`
  height: 1px;
  width: 100%;
  background: #eeeeee;
`;
