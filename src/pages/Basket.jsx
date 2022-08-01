import * as storage from "../utils/storage";
import Navigation from "../components/Navigation";
import styled from "styled-components";
import BasketItem from "../components/BasketItem";
import { useEffect, useState } from "react";

const Basket = () => {
  const [basketItems, setBasketItems] = useState();

  useEffect(() => {
    const items = storage.getBasketItems();
    setBasketItems(items);
    console.log(items);
  }, []);

  //2. UI 구현
  const onClickRemoveButton = () => {
    alert("삭제");
  };

  return (
    <BasketStyled>
      <Navigation name="장바구니" hasBack={true} />

      {basketItems &&
        basketItems.map((item) => (
          <BasketItem
            key={item.id} //map을 돌때 key를 넣어주어야 한다
            thumbnail={item.thumbnail}
            name={item.name}
            price={item.price}
            onClickRemoveButton={onClickRemoveButton}
          />
        ))}
    </BasketStyled>
  );
};

const BasketStyled = styled.div``;

export default Basket;
