import { styled } from "styled-components"
import { HiCalculator } from "react-icons/hi2";

const StyledHeader = styled.div`
 display: flex;
 justify-content: space-between;  
 align-items: center;
 padding: 2rem 2.5rem;
 font-size: 1.7rem;
 border-top-right-radius: 2rem;
 border-top-left-radius: 2rem;
 background: linear-gradient(150deg, rgba(251,196,122,1) 1%, rgba(253,118,106,0.9715562694080244) 55%);
 & span{
    color: #fcfbfb;
    font-weight: 600;
 }
 & svg{
    fill: #fcfbfb;
 }
  
`;
// const Span = styled.span`
//     font-weight: 600;
//     color: #fcfbfb;
// `
function Header() {
    return (
        < StyledHeader>
            <HiCalculator/>
            <span>GPA Calculator</span>
        </StyledHeader>
    )
}

export default Header;
