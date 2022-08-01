import * as storage from "../utils/storage";
import Navigation from "../components/Navigation";
import styled from "styled-components";
import BasketItem from "../components/BasketItem";
import { useEffect, useState } from "react";

const Basket = () => {
  const [basketItems, setBasketItems] = useState();
  const [basketItemCount, setBasketItemCount] = useState(0);

  useEffect(() => {
    const items = storage.getBasketItems();
    setBasketItems(items);
    setBasketItemCount(items.length);
  }, []);

  //ItemCount가 바뀔때마다 실행하는 함수
  useEffect(() => {
    const items = storage.getBasketItems();
    setBasketItems(items);
  }, [basketItemCount]);

  const onClickRemoveButton = (productId) => {
    storage.removeBasketItem(productId);
    setBasketItemCount(basketItemCount - 1);
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
            onClickRemoveButton={() => onClickRemoveButton(item.id)}
          />
        ))}
      <div> 상품 금액({basketItemCount}개)</div>
    </BasketStyled>
  );
};

const BasketStyled = styled.div``;

export default Basket;
