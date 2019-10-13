var questions = {
"question1":{"text":"What is an Array?",
             "answer1":"banana",
             "answer2":"banana",
             "answer3":"banana",
             "answer4":"banana",
             "correctAnswer":"1"},
"question2":{"text":"What is an Array?",
             "answer1":"banana",
             "answer2":"banana",
             "answer3":"banana",
             "answer4":"banana",
             "correctAnswer":"1"},
"question3":{"text":"What is an Array?",
             "answer1":"banana",
             "answer2":"banana",
             "answer3":"banana",
             "answer4":"banana",
             "correctAnswer":"1"},
"question4":{"text":"What is an Array?",
             "answer1":"banana",
             "answer2":"banana",
             "answer3":"banana",
             "answer4":"banana",
             "correctAnswer":"1"},
"question5":{"text":"What is an Array?",
             "answer1":"banana",
             "answer2":"banana",
             "answer3":"banana",
             "answer4":"banana",
             "correctAnswer":"1"},
"question6":{"text":"What is an Array?",
             "answer1":"banana",
             "answer2":"banana",
             "answer3":"banana",
             "answer4":"banana",
             "correctAnswer":"1"},
"question7":{"text":"What is an Array?",
             "answer1":"banana",
             "answer2":"banana",
             "answer3":"banana",
             "answer4":"banana",
             "correctAnswer":"1"},
"question8":{"text":"What is an Array?",
             "answer1":"banana",
             "answer2":"banana",
             "answer3":"banana",
             "answer4":"banana",
             "correctAnswer":"1"}
} 
var highScore = {};
var answerArr = [];
var score = 0;
var timeAllowed = 120;
var sizeOfArray = 0;
timeEl  = document.getElementsByClassName("timer")[0];
timeEl.innerHTML = "Time Left: "+timeAllowed;
//Looping questions to create all questions
var index = 1;
var currentQuestion  = 0;
var mainTime;
loadHighScores();
var listCount;


for (question in questions){

    createQuestionquestion(questions[question]["text"],questions[question]["answer1"],questions[question]["answer2"],questions[question]["answer3"], questions[question]["answer4"],questions[question]["correctAnswer"], index);
    index++;
    sizeOfArray++;
}

function onStartQuiz(){
    document.getElementsByClassName("firstDiv")[0].style.display = "none";
    showCorrectQuesitons();
    mainTime = setInterval(timer,1000);
}

function createQuestionquestion(question, answer1, answer2, answer3, answer4, correctAnswer,numIndex){
//main div
var mainDiv  =document.createElement("div");
// .mainDiv Class
mainDiv.setAttribute("class","mainDiv");
mainDiv.setAttribute("index",numIndex);



//row 1 - question --------------------------
var divRow1 = document.createElement("div");
divRow1.setAttribute("class", "row");
//-
var questionDiv = document.createElement("div");
questionDiv.setAttribute("class", "col-md-12 question");
questionDiv.textContent = numIndex +") "+ question;
divRow1.appendChild(questionDiv);
var hr1 = document.createElement("hr");
divRow1.appendChild(hr1);
//row 2 - Answer ------------------------------
var divRow2 = document.createElement("div");
divRow2.setAttribute("class", "row");
//answer 1
var answerDiv1 = document.createElement("div");
answerDiv1.setAttribute("class", "col-md-3 answer");
answerDiv1.textContent = "1) "+answer1;
divRow2.appendChild(answerDiv1);

//answer 2
var answerDiv2 = document.createElement("div");
answerDiv2.setAttribute("class", "col-md-3 answer");
answerDiv2.textContent = "2) "+answer2;
divRow2.appendChild(answerDiv2);

//answer 3
var answerDiv3 = document.createElement("div");
answerDiv3.setAttribute("class", "col-md-3 answer");
answerDiv3.textContent = "3) "+answer3;
divRow2.appendChild(answerDiv3);

//answer 4
var answerDiv4 = document.createElement("div");
answerDiv4.setAttribute("class", "col-md-3 answer");
answerDiv4.textContent = "4) "+answer4;
divRow2.appendChild(answerDiv4);

//line
var hr2 = document.createElement("hr");
divRow2.appendChild(hr2);
//row 3 - Answer --------------------------------------
var divRow3 = document.createElement("div");
divRow3.setAttribute("class", "row");

//select
var formDivLeft = document.createElement("div");
formDivLeft.setAttribute("class", "col-md-6 bottomLeft");
divRow3.appendChild(formDivLeft);

//Select element
var selectEl = document.createElement("select");
var option1 =  document.createElement("option");
var option2 =  document.createElement("option");
var option3 =  document.createElement("option");
var option4 =  document.createElement("option");

selectEl.setAttribute("class", "selections")
//create options
option1.textContent = answer1;
option2.textContent = answer2;
option3.textContent = answer3;
option4.textContent = answer4;
//append options
selectEl.appendChild(option1);
selectEl.appendChild(option2);
selectEl.appendChild(option3);
selectEl.appendChild(option4);
//apend select to div
formDivLeft.appendChild(selectEl);

//button
var formDivRight  = document.createElement("div");
formDivRight.setAttribute("class", "col-md-6 submit");
divRow3.appendChild(formDivRight);

var button  = document.createElement("button");
button.setAttribute("class", "submitButton");
button.textContent = "Sumbit Answer"
formDivRight.appendChild(button);

button.addEventListener("click", calcResponse);

divRow3.appendChild(formDivLeft);
divRow3.appendChild(formDivRight);
// Append to mainDiv
mainDiv.appendChild(divRow1);
mainDiv.appendChild(divRow2);
mainDiv.appendChild(divRow3);
document.body.appendChild(mainDiv)


}

function calcResponse(event){
    if (event.target.matches("button")){
        var currentMain = event.target.parentElement.parentElement.parentElement
        var currentIndex = currentMain.getAttribute("index");
        var submittedResponse = parseInt(currentMain.getElementsByClassName("selections")[0].selectedIndex) + 1;
        
        console.log("answered: "+submittedResponse);
        console.log(currentIndex);

        if (submittedResponse != parseInt(questions["question"+currentIndex]["correctAnswer"])){
            if(currentIndex <= sizeOfArray){
            timeAllowed -= 15;
        }else{
            timeAllowed = 0;
        }

            answerArr[currentIndex] = 0;
        }else{
            score++;
            answerArr[currentIndex] = 1;
        }
    }
    showCorrectQuesitons();
}



function timer() {
    
    if(timeAllowed>0){
    timeEl.innerHTML = "";
    timeAllowed--;
    timeEl.innerHTML = "Time Left: "+timeAllowed;

}else{
    showEnd();
}
}

function showCorrectQuesitons(){
    if (currentQuestion < sizeOfArray){
    var currentBox =  document.getElementsByClassName("mainDiv")[(currentQuestion)];
    if (currentQuestion>0){
        var lastBox =  document.getElementsByClassName("mainDiv")[(currentQuestion-1)];
        lastBox.style.display = "none";
        currentBox.style.display = "block";
        
    }
    else{
        currentBox.style.display = "block";
    }
    currentQuestion++;
}else{
    showEnd();
}
}

function showEnd(){
    for (var e=0; e< sizeOfArray; e++){
document.getElementsByClassName("mainDiv")[e].style.display = "none";

document.getElementsByClassName("firstDiv")[0].style.display = "none";
document.getElementsByClassName("endDiv")[0].style.display = "block";
clearInterval(mainTime);

document.getElementsByClassName("timer")[0].style.display ="none";
};


}

function loadHighScores(){
currentLS = localStorage;
var count = 0;
for (item in localStorage["pastWinners"]){
    ulEl = document.getElementsByClassName("winList")[0];
    var li = document.createElement("li");
    li.innerHTML = (count + 1)+") "+item +" score: " +localStorage["pastWinners"]
    ulEl.appendChild(li);
    count++;
    listCount = count;
}

}

function saveHighScores(){
winnerCount = "winner"+listCount
    var name = document.getElementsByClassName("Nickname").value;
var currentObj = {"name":name, "score":score}
    localStorage["pastWinners"].setItem(winnerCount,JSON.stringify(currentObj))
}