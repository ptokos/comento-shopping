import Navigation from "../components/Navigation";
import ThemeButton from "../components/ThemeButton";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { mockTheme1Produdcts } from "../data/mockData";
import { mockTheme2Produdcts } from "../data/mockData";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // state(상태), 내부적, 리액트에서 변수를 다루는 설명 중 하나이고 하나의 컴포넌트 안에서 사용된다
  // 보통 화면이 변할때 state를 사용한다
  // 다시 랜더링(UI그리는 거)되는 조건 값(state)
  const [products, setProducts] = useState();
  const navigate = useNavigate();

  // 조건에 의해서 실행되는 함수
  useEffect(() => {
    setTimeout(() => {
      setProducts(mockTheme1Produdcts);
    }, 1000);
  }, []);

  const onClickThemeButton = (themeId) => {
    if (themeId === 1) {
      setProducts(mockTheme1Produdcts);
    } else if (themeId === 2) {
      setProducts(mockTheme2Produdcts);
    }
    console.log("버튼누름");
  };

  return (
    <div>
      <div>
        <Navigation />
        <ThemeSection>
          <ThemeButton
            themeName={"#겨울방한템"}
            onClick={() => onClickThemeButton(1)}
          />
          {/* props, 외부적, 외부에서 값을 넘겨주는 형태  */}
          <ThemeButton
            themeName={"#여름더워요"}
            onClick={() => onClickThemeButton(2)}
          />
        </ThemeSection>
        <GrayLine />
      </div>

      <div>
        <ProductSection>
          {/* mockTheme1Produdcts는 배열이고 배열의 값을 map함수를 통해 새로운 값으로 구성 */}
          {products ? (
            products.map((product) => (
              <ProductCard
                onClick={() => navigate(`product/${product.id}`)}
                key={product.id}
                name={product.name}
                description={product.description}
                thumbnail={product.thumbnail}
              />
            ))
          ) : (
            <div> 테마를 선택해주세요</div>
          )}
        </ProductSection>
      </div>
    </div>
  );
};

const ThemeSection = styled.div`
  display: flex;
  gap: 12px;
  padding: 40px 12px;
`;

const GrayLine = styled.div`
  height: 8px;
  width: 100%;
  background: #eeeeee;
`;

const ProductSection = styled.div`
  padding: 20px;
`;

export default Home;
