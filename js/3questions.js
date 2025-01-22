 
let el_down = document.getElementById("GFG_DOWN");
const input_map = {
  LNx1_question: "LNx1",
 
  SSx1_question: "SSx1",
 
  ASx1_question: "ASx1",
  
}
const addText = (ev) => {
    let questions = [];

    let fields = document.querySelectorAll(
      "#LNx1_question,  #SSx1_question, #ASx1_question"
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
    el_down.innerHTML = "Questions set";

    console.log(questions[0].text)

   
    
    questions.forEach(function (element) {
      if(element.text){
       console.log('There as question')
       const textbox_value = this.value; // get text from input bpx
       console.log(element.field);
       const target = input_map[element.field]; // get location (ie: the id) of where the text should be placed
       console.log(target);
       var gameboardCard = document.getElementById(target); 
       console.log(gameboardCard);
       gameboardCard.classList.add("active");

      
      
      }
   });
 
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

    let questions = [];

    let fields = document.querySelectorAll(
      "#LNx1_question,   #SSx1_question,  #ASx1_question"
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
    
    questions.forEach(function (element) {
      if(element.text){
       console.log('There as question')
       const textbox_value = this.value; // get text from input bpx
       console.log(element.field);
       const target = input_map[element.field]; // get location (ie: the id) of where the text should be placed
       console.log(target);
       var gameboardCard = document.getElementById(target); 
       console.log(gameboardCard);
       gameboardCard.classList.add("active");

      
      
      }
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
        document.getElementById('questionCard').style.backgroundImage = "url('./img/question-card.png')";
        document.getElementById("questionText").style.top = "0";
  
  
      }else if(category.classList.contains("succinctly-succinct")){
        document.getElementById("categoryTitle").textContent="Succinctly"+ newline + "Succinct";
        document.getElementById('question').style.backgroundColor = "#78DF00";
        document.getElementById('questionCard').style.backgroundImage = "url('./img/question-card.png')";
        document.getElementById("questionText").style.top = "0";
  
  
      }else if(category.classList.contains("acronym-speedfire")){
        document.getElementById("categoryTitle").textContent="Acronym"+ newline + "Speedfire";
        document.getElementById('question').style.backgroundColor = "#FF8A71";
        document.getElementById('questionCard').style.backgroundImage = "url('./img/question-card.png')";
        document.getElementById("questionText").style.top = "0";
  
  
      }else if(category.classList.contains("wild-card")){
        document.getElementById("categoryTitle").textContent="Wild Card";
        document.getElementById('question').style.backgroundColor = "#A5A5A5";
        document.getElementById('questionCard').style.backgroundImage = "url('./img/question-card.png')";
        document.getElementById("questionText").style.top = "0";
  
  
      }else if(category.classList.contains("certainly")){
        document.getElementById("categoryTitle").textContent="CERTainly";
        document.getElementById('question').style.backgroundColor = "#C7BDFF";
        document.getElementById('questionCard').style.backgroundImage = "url('./img/question-card.png')";
        document.getElementById("questionText").style.top = "0";
  
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
        
        case 'SSx1':
        document.getElementById("questionText").innerHTML=stored[1].text;
          break;
        
        case 'ASx1':
        document.getElementById("questionText").innerHTML=stored[2].text;
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


 
