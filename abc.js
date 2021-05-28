
const array=[
   {question:"Q1: HTML stands for -",
    a:"HighText Machine Language",
    b:"HyperText and links Markup Language",
    c:"HyperText Markup Language",
    d:"None of these",
    ans:"ans3"
   },

   {question:"Q2: Which type of JavaScript language is ___",
    a:"Object-Oriented",
    b:"Object-Oriented",
    c:"Assembly-language",
    d:"High-level",
    ans:"ans2"  
   },

   {question:"Q3:What tag is used to display a picture in a HTML page? ",
    a:"picture",
    b:"image",
    c:"img",
    d:"src",
    ans:"ans3"
   },

   {question:"Q4: HTML tags are represented within -",
    a:"< >",
    b:"( )",
    c:"[ ]",
    d:"{ }",
    ans:"ans1"
   },
]

const question=document.querySelector('#question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');


const answers =document.querySelectorAll('.answer');
// all input tags refrance 

const showScore=document.querySelector('#showScore');

let score=0;
let q_Count=0;

   const loadQuetion= ()=>{

    // console.log(array[0])

    const q_List=array[q_Count];

                                   //array  object (dot) .key 
    question.innerText=q_List.question

    option1.innerText=q_List.a;
    option2.innerText=q_List.b;
    option3.innerText=q_List.c;
    option4.innerText=q_List.d;

}
loadQuetion();

    
    const getCheckedAnswer = ()=>{
        let answer;

        answers.forEach((curAnsElem)=>{
            if(curAnsElem.checked){
                answer = curAnsElem.id;
            }
        });
        return answer;
    };
  
           const deselectAll=()=>{
               answers.forEach((curAnsElem)=> curAnsElem.checked=false)
           }
       

        // click event submit button 
                submit.addEventListener('click',()=>{
                        
                        const checkedAnswer=getCheckedAnswer();
                        console.log(checkedAnswer)

                        if(checkedAnswer==array[q_Count].ans){
                            score++;     
                        };

                 q_Count++;
                 deselectAll();

                      if(q_Count<array.length){
                        loadQuetion();
                      } 
                      else{
                        showScore.innerHTML=  `<h3> You Scored ${score} / ${array.length}</h3>
                                    <h2> Thank You For Playing</h2>
                                    <button class="btn" onclick="location.reload()">Play Again </button>` ;
                                    showScore.classList.remove('scoreArea')
                      console.log("helli")
                                }
                });
  
       



