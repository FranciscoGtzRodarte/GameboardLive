 
let el_down = document.getElementById("GFG_DOWN");

const addText = (ev) => {
    let questions = [];

    let fields = document.querySelectorAll(
      "#LNx1-question, #LNx2-question, #LNx3-question, #SSx1-question, #SSx2-question, #SSx3-question, #ASx1-question, #ASx2-question, #ASx3-question, #WCx1-question, #WCx2-question, #WCx3-question, #Cx1-question, #Cx2-question, #Cx3-question, #FB-question"
    );
    fields.forEach(function (element) {
      questions.push({
        field: element.id,
        text: element.querySelector(".text-input").value
      });
    });
    console.log(questions);
   // console.log(questions[0]);
    localStorage.setItem("questionsData", JSON.stringify(questions));
    el_down.innerHTML =
        "Questions set";
  };

  document.querySelectorAll(".saveButton").forEach(function (btn) {
    btn.addEventListener("click", addText);
  });

  // on page load
  let stored = JSON.parse(localStorage.getItem("questionsData"));
  if (stored) {
    console.log(stored);
    stored.forEach(function (item) {
      document
        .querySelector("#" + item.field)
        .querySelector(".text-input").value = item.text;
    });
     
  }



function resetAnimation(){
  
  var categoryTitleEl = document.getElementById('categoryTitle'); // get a reference to the targeted element
  categoryTitleEl.classList.remove('animate-category-title'); // add the class name to that element

  var questionCardEl = document.getElementById('questionCard'); // get a reference to the targeted element
  questionCardEl.classList.remove('animate-question'); // add the class name to that element

  


}

  function playCard(id) {
 addText();
    console.log(id)
    var newline = "\r\n";
    let category =  document.getElementById(id)
    // returns 'true' if the class exists, and 'false' if it doesn't.
    if(category.classList.contains("legit-nah")){
      document.getElementById("categoryTitle").textContent="Legit or Nah";
      document.getElementById('question').style.backgroundColor= "#01e1ec";
    }else if(category.classList.contains("succinctly-succinct")){
      document.getElementById("categoryTitle").textContent="Succinctly"+ newline + "Succinct";
      document.getElementById('question').style.backgroundColor = "#78DF00";
    }else if(category.classList.contains("acronym-speedfire")){
      document.getElementById("categoryTitle").textContent="Acronym"+ newline + "Speedfire";
      document.getElementById('question').style.backgroundColor = "#FF8A71";
    }else if(category.classList.contains("wild-card")){
      document.getElementById("categoryTitle").textContent="Wild Card";
      document.getElementById('question').style.backgroundColor = "#A5A5A5";
    }else if(category.classList.contains("certainly")){
      document.getElementById("categoryTitle").textContent="CERTainly";
      document.getElementById('question').style.backgroundColor = "#C7BDFF";
    }else if(category.classList.contains("final-bot")){
      document.getElementById("categoryTitle").textContent="Final Bot";
      document.getElementById('question').style.backgroundColor = "#7E53FF";
      document.getElementById('questionCard').style.backgroundImage = "url('./img/fb-question-card.png')";
      document.getElementById("questionText").style.top = "5vw";

    }

    let stored = JSON.parse(localStorage.getItem("questionsData"));
    if (stored) {
      console.log(stored);
      stored.forEach(function (item) {
        document
          .querySelector("#" + item.field)
          .querySelector(".text-input").value = item.text;
      });
       
    }
 
    switch(id) {
        case 'LNx1':
          console.log(stored[0]);
        document.getElementById("questionText").innerHTML=stored[0].text;
        break;
        case 'LNx2':
        document.getElementById("questionText").innerHTML=stored[1].text;
        break;
        case 'LNx3':
        document.getElementById("questionText").innerHTML=stored[2].text;
        break;
        case 'SSx1':
        document.getElementById("questionText").innerHTML=stored[3].text;
          break;
        case 'SSx2':
        document.getElementById("questionText").innerHTML=stored[4].text;
          break;
        case 'SSx3':
        document.getElementById("questionText").innerHTML=stored[5].text;
          break;
        case 'ASx1':
        document.getElementById("questionText").innerHTML=stored[6].text;
          break;
        case 'ASx2':
        document.getElementById("questionText").innerHTML=stored[7].text;
          break;  
        case 'ASx3':
        document.getElementById("questionText").innerHTML=stored[8].text;
          break;
          case 'WCx1':
          document.getElementById("questionText").innerHTML=stored[9].text;
          break;
          case 'WCx2':
          document.getElementById("questionText").innerHTML=stored[10].text;
          break;
          case 'WCx3':
          document.getElementById("questionText").innerHTML=stored[11].text;
          break;
          case 'Cx1':
          document.getElementById("questionText").innerHTML=stored[12].text;
          break;
          case 'Cx2':
          document.getElementById("questionText").innerHTML=stored[13].text;
          break;
          case 'Cx3':
          document.getElementById("questionText").innerHTML=stored[14].text;
          break;
          case 'FBot':
          document.getElementById("questionText").innerHTML=stored[15].text;
          break;
        default:
          // code block
      
      }



    
    

  
    var categoryTitleEl = document.getElementById('categoryTitle'); // get a reference to the targeted element
  categoryTitleEl.classList.add('animate-category-title'); // add the class name to that element

    var questionCardEl = document.getElementById('questionCard'); // get a reference to the targeted element
    questionCardEl.classList.add('animate-question'); // add the class name to that element


    setTimeout(() => {
      console.log(id);
      let currentID = id;
      playedCard(currentID);
    }, 1000);


}

function playedCard(id){
  console.log(id)
 document.getElementById(id).style.filter = "grayscale(100%) opacity(50%)";
}


const reset = document.querySelector("#reset");
reset.addEventListener("click", () => document.location.reload());


 
  let counterDisplayElem = document.querySelector('.counter-display');
  let counterMinusElem = document.querySelector('.counter-minus');
  let counterPlusElem = document.querySelector('.counter-plus');
  let counterPlusElem2 = document.querySelector('.counter-plus2');
  let counterPlusElem3 = document.querySelector('.counter-plus3');
  let counterPlusElem1k = document.querySelector('.counter-plus1k');
  let counterReset = document.querySelector('.counter-reset');

  let counterDisplayElemB = document.querySelector('.counter-display-b');
  let counterMinusElemB = document.querySelector('.counter-minus-b');
  let counterPlusElemB = document.querySelector('.counter-plus-b');
  let counterPlusElem2B = document.querySelector('.counter-plus2-b');
  let counterPlusElem3B = document.querySelector('.counter-plus3-b');
  let counterResetB = document.querySelector('.counter-reset-b');

  let count = 0;

  let countB = 0;

  updateDisplay();

  updateDisplayB();

  counterPlusElem.addEventListener("click",()=>{
      count++;
      updateDisplay();
  }) ;


  counterPlusElem2.addEventListener("click",()=>{
      count=count+2;
      updateDisplay();
  }) ;


  counterPlusElem3.addEventListener("click",()=>{
      count=count+3;
      updateDisplay();
  }) ;

  counterPlusElem1k.addEventListener("click",()=>{
      count=count+1000;
      updateDisplay();
  }) ;

  counterMinusElem.addEventListener("click",()=>{
      count--;
      updateDisplay();
  });

  counterReset.addEventListener("click",()=>{
      count=0;
      updateDisplay();
  }) ;

  counterPlusElemB.addEventListener("click",()=>{
      countB++;
      updateDisplayB();
  }) ;


  counterPlusElem2B.addEventListener("click",()=>{
      countB=countB+2;
      updateDisplayB();
  }) ;


  counterPlusElem3B.addEventListener("click",()=>{
      countB=countB+3;
      updateDisplayB();
  }) ;

  counterMinusElemB.addEventListener("click",()=>{
      countB--;
      updateDisplayB();
  });

  counterResetB.addEventListener("click",()=>{
      countB=0;
      updateDisplayB();
  }) ;



  function updateDisplay(){
      counterDisplayElem.innerHTML = count;

  };


  function updateDisplayB(){

      counterDisplayElemB.innerHTML = countB;
  };
 
