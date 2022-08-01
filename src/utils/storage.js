const BASKET = "BASKET";

export const getBasketItems = () => {
  const items = localStorage.getItem(BASKET);
  return items ? JSON.parse(items) : [];
};

export const addBasket = (product) => {
  let items = getBasketItems();

  // 동일 상품이 있는 경우 추가하지 않음
  const isSampProduct = !!items.find((item) => item.id === product.id);
  if (!isSampProduct) {
    items.push(product);
    localStorage.setItem(BASKET, JSON.stringify(items));
  }
};

export const removeBasketItem = (productId) => {
  //localStorage.removeItem(BASKET); : keyvalue 구조이기에 이런 로직을 사용할 시 장바구니 전체가 삭제
  // 기존 장바구니 상품 리스트 가져오기
  let items = getBasketItems();

  // 상품 하나 제거한 리스트 만들기
  items = items.filter((items) => items.id !== productId);

  // 로컬스토리지에서 장바구니 정보 날리기
  localStorage.removeItem(BASKET);

  // 다시 상품리스트 저장하기
  localStorage.setItem(BASKET, JSON.stringify(items));

  console.log("------removeBasketItem");
  console.log(getBasketItems());
};
