import styled from "styled-components";
const DetailButton = ({ detailName, onClick }) => {
  return (
    <DetailButtonstyled onClick={onClick}>{detailName}</DetailButtonstyled>
  );
};

const DetailButtonstyled = styled.div`
  background: #eeeeee;

  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  padding: 14px 66px;

  color: #000000;
`;

export default DetailButton;
