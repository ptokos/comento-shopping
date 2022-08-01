import * as storage from "../utils/storage";
import Navigation from "../components/Navigation";
import styled from "styled-components";

const Basket = () => {
  console.log(storage.getBasketItems());
  return (
    <BasketStyled>
      <Navigation name="장바구니" hasBack={true} />
    </BasketStyled>
  );
};

const BasketStyled = styled.div``;

export default Basket;
