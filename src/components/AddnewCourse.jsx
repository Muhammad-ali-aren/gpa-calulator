import { styled } from "styled-components"
import { HiOutlineDocumentPlus } from "react-icons/hi2";
const NewCourse = styled.button`
 width: 95%;
 border: 1px dashed rgba(100, 96, 98, 0.3);
 margin-top: .8rem;
 text-align: center;
 padding: 1rem;
 position: sticky;
 bottom: 0;
 left: 0;
 background-color: #fcfbfb;
 color: #646062;
 /* text-align: center; */
 display: flex;
 align-items: center;
 justify-content: center;
  &:hover{
    cursor: pointer;
  }
 &> svg{
    font-size: 3rem;
 }
  & p {
    font-size: 1.3rem;
  }
`
function AddnewCourse({onClick}) {
    return (
        <NewCourse onClick={onClick}>
            <HiOutlineDocumentPlus/>
            <p>Add Course</p>
        </NewCourse>
    )
}

export default AddnewCourse
