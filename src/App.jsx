
import { styled } from "styled-components";
import { HiXMark } from "react-icons/hi2";
import Results from "./components/Results";
import Header from "./components/Header";
import AddnewCourse from "./components/AddnewCourse";
import { useState } from "react";

const StyledApp = styled.div`
margin: 0 auto;
margin-top: 10rem; 
 min-width: 38rem;
 max-width: 80rem;
 border: .5px solid  rgba(100, 96, 98, 0.1);
 border-radius: 2rem;
 display: flex;
 flex-direction: column;
 box-shadow: 0px 6px 11px -3px rgba(0,0,0,0.73);
`;

const Main = styled.main`
  height: 70vh;
  background-color: #fcfbfb;
  overflow: scroll;
  padding:.8rem;
  position: relative;
`;
const StyledDetils = styled.div`
  margin-top: 1.3rem;
  display: grid;
  grid-template-columns: 1fr 6rem;
  justify-items: center;
  align-items: center;
  /* gap: 3rem; */   
`;

const CourseInputs = styled.div`
width: 90%;
display: grid;
grid-template-columns: 1fr 1fr;
border: 1px solid rgba(253,118,106,0.6992997882746849);
border-radius: 1rem;

` 
const Input = styled.input`
    grid-column: 1 / -1;
    display: inline-block;
    width: 100%;
    font-family: sans-serif;
    background-color:#fcfbfb ;
    font-size: 1.9rem;
    padding:.5rem;
    border: none;
    border-bottom: 1px solid rgba(253,118,106,0.6992997882746849);
    border-top-right-radius:1rem;
    border-top-left-radius:1rem;
    &:focus{
        outline: none;
    }
`
const Select = styled.select`
    padding: 1rem;
    background-color:  #fcfbfb;
    border: none;
    color: #646062;
    &:not(:last-child){
        border-right:1px solid rgba(253,118,106,0.6992997882746849);
        border-bottom-left-radius:1rem;
    }
    &:nth-of-type(2){
        border-bottom-right-radius:1rem;
    }
    & option{
        background-color: #fcfbfb;
    }
`
const Mark = styled.button`
width: 4rem;
height: 4rem;
 border: 1px solid  rgba(253,118,106,0.6992997882746849);
 background-color:  #fcfbfb;
 text-align: center;
 padding: 1.1rem;
 border-radius: 50%;
 &:hover{
    cursor: pointer;
 }
 & > svg{
    fill:rgba(253,118,106,0.6992997882746849);
 }
`
function App() {
  const[courses, setCourses] = useState([
    {id: Date.now() , name:"",grade:'', units:''}
  ])

  function addNewCourse(){
    setCourses(courses => [...courses, {id: Date.now(), name:"",grade:'', units:''}])
  }

  function updateCourse(id,property,value){
    const updatedCourses = courses.map(course=> course.id === id ?  {...course, [property]: value} : course);
    setCourses(updatedCourses)
  }

  function deleteCourse(id){
    const remainedCourses = courses.filter(course => course.id !== id)
    // console.log(remainedCourses)
    setCourses(remainedCourses)
  }



  return (
    <StyledApp>
      <Header/>
      <Main>
        {courses.map(course=> 
        <StyledDetils key={course.id}>
           <CourseInputs>
             <Input type="text" value={course.name} placeholder="Course Name" onChange={(e)=>updateCourse(course.id,'name',e.target.value)}/>
             <Select name="grade" value={course.grade} id="" onChange={(e)=> updateCourse(course.id,"grade",e.target.value)} side="right">
                <option  >Select Grade</option>
                <option value="4.0">A (4.0)</option>
                <option value="3.7">A- (3.7)</option>
                <option value="3.3">B+ (3.3)</option>
                <option value="3.0">B (3.0)</option>
                <option value="2.7">B- (2.7)</option>
                <option value="2.3">C+ (2.3)</option>
                <option value="2.0">C (2.0)</option>
                <option value="1.7">C- (1.7)</option>
                <option value="1.3">D+ (1.3)</option>
                <option value="1.0">D (1.0)</option>
                <option value="0.0">F (0.0)</option>
            </Select>
            <Select name="units" value={course.units} id="" onChange={(e)=> updateCourse(course.id,"units",e.target.value)} side="left">
                <option >Select Units</option>
                <option value="0.5">0.5</option>
                <option value="1.0">1.0</option>
                <option value="1.5">1.5</option>
                <option value="2.0">2.0</option>
                <option value="2.5">2.5</option>
                <option value="3.0">3.0</option>
                <option value="3.5">3.5</option>
                <option value="4.0">4.0</option>
                <option value="4.5">4.5</option>
                <option value="5.0">5.0</option>
            </Select>
           </CourseInputs>
           <Mark onClick={()=>deleteCourse(course.id)}>
           <HiXMark/>
           </Mark>
        </StyledDetils>)}
        <AddnewCourse onClick={addNewCourse}/>
      </Main>
      <Results courses={courses}/>
    </StyledApp>
  )
} 
export default App;