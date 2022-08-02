import * as storage from "../utils/storage";
import Navigation from "../components/Navigation";
import styled from "styled-components";
import BasketItem from "../components/BasketItem";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Basket = () => {
  const [basketItems, setBasketItems] = useState();
  const [basketItemCount, setBasketItemCount] = useState(0);
  const [basketItemTotalPrice, setBasketItemTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const items = storage.getBasketItems();
    setBasketItems(items);
    setBasketItemCount(items.length);
  }, []);

  //ItemCount가 바뀔때마다 실행하는 함수
  useEffect(() => {
    const items = storage.getBasketItems();
    setBasketItems(items);

    //상품 합계를 계산하는 로직
    let totalPrice = 0;

    items.forEach((item) => {
      console.log(item.price);
      totalPrice += Number(item.price.replace(",", ""));
      setBasketItemTotalPrice(totalPrice);
    });
  }, [basketItemCount]);

  const onClickRemoveButton = (productId) => {
    storage.removeBasketItem(productId);
    setBasketItemCount(basketItemCount - 1);
  };

  const onClickOrderButton = () => {
    alert("주문되었습니다.");
    navigate("/");
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
      <div> 상품 합계 : {basketItemTotalPrice.toLocaleString()} 원</div>

      <OrderButton onClick={() => onClickOrderButton()}>주문하기</OrderButton>
    </BasketStyled>
  );
};

const BasketStyled = styled.div``;

const OrderButton = styled.div`
  background: #24dbaf;

  height: 70px;
  width: 110px;

  font-weight: 700;
  font-size: 16px;
  line-height: 21px;

  display: flex;
  align-items: center;
  text-align: center;
  padding: 20px 150px;

  color: #000000;
`;

export default Basket;
