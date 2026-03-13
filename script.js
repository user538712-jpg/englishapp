function chooseLevel(level){
    document.getElementById("topics").style.display = "block";
}


// открытие урока
function startLesson(lessonId){

    let lessons = document.querySelectorAll(".lesson");

    lessons.forEach(function(lesson){
        lesson.style.display = "none";
    });

    document.getElementById(lessonId).style.display = "block";

}


// переворот карточки
function flipCard(card){

    card.classList.toggle("flipped");

}


// произношение слова
function speakWord(word){

    let speech = new SpeechSynthesisUtterance(word);

    speech.lang = "en-US";
    speech.rate = 0.9;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

}
function askTeacher(){

let q = document.getElementById("question").value;

let answer="";

if(q.toLowerCase().includes("do") && q.toLowerCase().includes("make")){
answer="Use 'do' for general actions (do homework, do work). Use 'make' for creating something (make food, make a cake).";
}

else if(q.toLowerCase().includes("plural")){
answer="Plural means more than one. Usually we add -s: book → books, cat → cats.";
}

else if(q.toLowerCase().includes("past")){
answer="Past tense talks about the past. Example: walk → walked, play → played.";
}

else{
answer="Good question! Try asking about grammar, words, or pronunciation.";
}

document.getElementById("answer").innerText = answer;

}