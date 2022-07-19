import Navigation from "../components/Navigation";
import ThemeButton from "../components/ThemeButton";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";
import { mockTheme1Produdcts } from "../data/mockData";
import { mockTheme2Produdcts } from "../data/mockData";

const Home = () => {
  // state(상태), 내부적, 리액트에서 변수를 다루는 설명 중 하나이고 하나의 컴포넌트 안에서 사용된다
  const [products, setProduct] = useState();
  return (
    <div>
      <div>
        <Navigation />
        <ThemeSection>
          <ThemeButton themeName={"#겨울방한템"} />
          {/* props, 외부적, 외부에서 값을 넘겨주는 형태  */}
          <ThemeButton themeName={"#따순머그컵"} />
        </ThemeSection>
        <GrayLine />
      </div>

      <div>
        <ProductSection>
          {/* mockTheme1Produdcts는 배열이고 배열의 값을 map함수를 통해 새로운 값으로 구성 */}
          {mockTheme1Produdcts.map((product) => (
            <ProductCard
              name={product.name}
              description={product.description}
              thumbnail={product.thumbnail}
            />
          ))}
          {/* <ProductCard
            name="비숑 블랙 머그잔"
            description="쌀쌀한 날씨에 따뜻한 우유, 커피 한잔하기 좋은 블랙 & 화이트 비숑 머그잔입니다."
            thumbnail="https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1.jpg"
          />

          <ProductCard
            name="가열 보온 티코스터 온열 원터치 컵 받침대"
            description="언제나 따뜻하게 최대 12시간 동안 최대 60도의 온도로 따듯한 차를 즐길 수 있습니다."
            thumbnail="https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product2.jpg"
          />

          <ProductCard
            name="벨루즈까사 솜사탕 파스텔 머그 4종 세트"
            description="솜사탕처럼 부드러운 쉐입에 스트라이프 조각이 더해져 심플하면서도 세련된 파스텔 컬러의 머그"
            thumbnail="https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product3.jpg"
          /> */}
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
