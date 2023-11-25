import React from 'react'
import {useSelector} from 'react-redux'
import {Link,useLocation,useNavigate} from 'react-router-dom'
import './HomeMainbar.css'
import QuestionsList from "./QuestionsList";
const HomeMainbar =()=> {

const location = useLocation()
  const user = 1;
const navigate = useNavigate()
const questionsList =  useSelector(state => state.questionsReducer)
// console.log(questionsList)


//   var questionsList = [{
// _id: 1,
// votes:3,
// noOfAnswer:2,
// questionTitle:" what is function?",
// questionBody:"It meant to be",
// questionTags:["java","node js","react js","mongoose"],
// userPosted:"mano",
// userId:1,
// askedOn:"jan 1",
// answer:[{
//   answerBody:"Answer",
//   UserAnswered:'Kumar',
//   answerredOn:" jan 2",
//   userId:2,
// }]

//   },{
//     _id: 2,
//     votes:0,
//     noOfAnswer:0,
//     questionTitle:" what is function?",
//     questionBody:"It meant to be",
//     questionTags:["javascript","R","python"],
//     userPosted:"mano",
//     askedOn:"jan 1",
//     answer:[{
//       answerBody:"Answer",
//       UserAnswered:'Kumar',
//       answerredOn:" jan 2",
//       userId:2,
//     }]
    
//       },{
//         _id: 3,
//         votes:1,
//         noOfAnswer:0,
//         questionTitle:" what is function?",
//         questionBody:"It meant to be",
//         questionTags:["javascript","R","python"],
//         userPosted:"mano",
//         askedOn:"jan 1",
//         userId:1,
//         answer:[{
//           answerBody:"Answer",
//           UserAnswered:'Kumar',
//           answerredOn:" jan 2",
//           userId:2,
//         }]
        
//           }]  
  
  
const checkAuth =() =>{
  if(user===null){
  alert("login or signup to ask question")
  navigate('/Auth')
  }else{
    navigate('/AskQuestion')
  }

}
  return(

<div className="main-bar">
      <div className="main-bar-header">
        {
        location.pathname === "/" ? (<h1>Top Questions</h1> ) : (<h1>All Questions</h1> )
        }
        <Link to='/AskQuestion' onClick={checkAuth} className='ask-btn'>Ask Question</Link>
  </div>
  <div >
    {
      questionsList.data === null ?
      <h1>Loading...</h1>:
      <>
      <p>{questionsList.data.length} questions</p>
      <QuestionsList questionsList={questionsList.data}/>
</>
    }  
    
  </div>
</div>
)
  }
  
export default HomeMainbar
