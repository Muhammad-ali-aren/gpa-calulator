import { memo, useState } from "react";
import { styled } from "styled-components"

const StyledResults = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    padding: .5rem 1rem;
    font-size: 1.6rem;
    word-spacing: .4rem;
    background-color: #fcfbfb;
    border-bottom-right-radius: 2rem;
    border-bottom-left-radius: 2rem;
    border-top: 1px solid rgba(100, 96, 98, 0.1);
`
const Result = styled.div`
margin-top: .5rem;
display: flex;
flex-direction: column;
gap: .5rem;
 & > span:last-child{
font-size: ${props=> props.about ==="gpa" ? "3rem":"1.2rem"};
font-weight: ${props=> props.about ==="gpa" ? "500":""}; 
color: ${props=> props.about ==="gpa" ? "#fd766a":""};

 }

 & > span:last-child{
 margin-top: ${props=> props.about ==="unit" ? "1.9rem":""}
 }
`;

const Button = styled.button`
align-self: center;
padding: .9rem 2.5rem;
font-size: 1.8rem;
font-weight: 500;
cursor: pointer;
background: linear-gradient(120deg,  rgba(253,118,106,0.9715562694080244) 30%,rgba(251,196,122,1)55%);
border: none;
border-radius: 2rem;
color:#fcfbfb ;
box-shadow: 0px 6px 9px 0 rgba(0,0,0,0.23);
`

function Results({courses}) {
    const [gpa, setGpa] = useState(0)
    const [totalUnits, setTotalUnits] = useState(0)
         
   
    function calculateGpa(){
        
        const totalGradePoints =  (courses.reduce((total, course)=> {
            const gradeValue = parseFloat(course.grade);
            const unitsValue = parseFloat(course.units);
            if(!isNaN(gradeValue) && !isNaN(unitsValue)){
                return total + gradeValue * unitsValue;
            }
            return total;
        },0))

        setTotalUnits(courses.reduce((total, course)=>{
            const unitsValue = parseFloat(course.units)
            if(!isNaN(unitsValue)){
                return total + unitsValue;
            } 
            return total;
        },0)) 
        
        if(totalUnits === 0){
            return "N/A"
        }
         setGpa(totalGradePoints / totalUnits);
    }
    return (
        <StyledResults>
             <Result about="unit">
              <span>Units Total</span>
              <span>{totalUnits.toFixed(2)}</span>     
             </Result>
             <Button onClick={calculateGpa}>Calculate</Button>
             <Result about="gpa">
              <span>Units Total</span>
              <span>{gpa.toFixed(2)}</span>   
             </Result>
        </StyledResults>
    )
}

export default memo( Results)
