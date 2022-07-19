import styled from "styled-components";

const Navigation = () =>{
    return (
    <div> 
        <NavigationStyled> 코멘토 쇼핑 </NavigationStyled>
     </div>
    );
};

const NavigationStyled = styled.div`
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;

    display: flex;
    align-items: center;
    text-align: center;
    padding: 20px 152px ;

    color: #000000;
`

export default Navigation;