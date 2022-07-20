import styled from "styled-components";
const ThemeButton = ({ themeName, onClick }) => {
  return <ThemeButtonstyled onClick={onClick}>{themeName}</ThemeButtonstyled>;
};
// styled이지만 div이기에 onClick이 적용된다
const ThemeButtonstyled = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: fit-content;
  border-radius: 10px;

  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  padding: 24px 16px;
  color: white;
`;

export default ThemeButton;
