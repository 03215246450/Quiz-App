var questions = [
    {
        question: "HTML Stands for ______________",
        options: ["HTML", "HTML", "Hypertext Markup Language", "HTML"],
        correctAnswer: "Hypertext Markup Language",
    },
    {
        question: "CSS Stands for ______________",
        options: ["CSS", "CSS", "Cascading Style Sheet", "CSS"],
        correctAnswer: "Cascading Style Sheet",
    },
    {
        question: "JS Stands for ______________",
        options: ["JS", "JS", "JavaScript", "JS"],
        correctAnswer: "JavaScript",
    },
    {
        question: "RAM Stands for ______________",
        options: ["RAM", "RAM", "Random Access Memory", "RAM"],
        correctAnswer: "Random Access Memory",
    },
    {
        question: "SQL Stands for ______________",
        options: ["SQL", "SQL", "Structured Query Language", "SQL"],
        correctAnswer: "Structured Query Language",
    },
    {
        question: "is HTML is Programming Language?",
        options: ["YES", "NO"],
        correctAnswer: "NO",
    },
];

var currentQuestion = document.getElementById("currentQuestion")
var totalQuestion = document.getElementById("totalQuestion")
var question = document.getElementById("question")
var ParentOptions = document.getElementById("ParentOptions")
var marks = 0
var indexValue = 0

function renderQueation(){
    // ye question number render kryga
    currentQuestion.innerHTML = indexValue+1
    // ye total Question kitny he wo bataye ga
    totalQuestion.innerHTML = questions.length
    // ye value set ki he ta k hmy bar bar pura index number na dena pary
    object = questions[indexValue]
    // yaha hmny html k main question ko apny javascript me question k equal kawaya he 
    // jo object me he
    question.innerHTML = object.question
    // ye hmny empty string is liye rakha he k nichy steps me += ki wajah se jo concatination ho rahi he 
    // purany option bhi arahy he wo nhi aye sirf javascript waly option aye
   ParentOptions.innerHTML = ""
//    ye loop is liye chalaya he k ye sary options read kry or page pe display ho
    for(var i = 0; i<object.options.length; i++){
        ParentOptions.innerHTML += ` <div class="col-md-6">
        <div class="btns ">
            <button onclick="checkQuestion('${object.options[i]}','${object.correctAnswer}')" type="button" class="btn btn-primary m-3 w-100">
            ${object.options[i]}
             </button>
        </div>
    </div>`
    }
}
// ye hamara pura function render ho raha he
renderQueation()

function nextQuestion(){
    indexValue++
if(indexValue<questions.length){
    renderQueation()
}else{
    alert("Quiz has completed")
    // nextQuestion().disabled = true
}

}


function checkQuestion(a, b){
    if(a == b){
        marks++
        console.log(marks);
    }
    nextQuestion()
}