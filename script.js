const questions = [
    {
        question: "What is the capital of India?",
        choices: ["Delhi", "Mumbai", "Kolkata", "Goa"],
        correctAnswer: "Delhi",
    },
    {
        question: "Who wrote the national anthem of India?",
        choices: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Subhash Chandra Bose"],
        correctAnswer: "Rabindranath Tagore",
    },
    {
        question: "Which is the largest planet in our solar system?",
        choices: ["Earth", "Jupiter", "Mars", "Saturn"],
        correctAnswer: "Jupiter",
    },
    {
        question: "What is the national animal of India?",
        choices: ["Lion", "Tiger", "Elephant", "Leopard"],
        correctAnswer: "Tiger",
    },
    {
        question: "Which Indian city is known as the 'Pink City'?",
        choices: ["Jaipur", "Udaipur", "Jodhpur", "Bikaner"],
        correctAnswer: "Jaipur",
    },
    {
        question: "What is the chemical symbol for water?",
        choices: ["H2O", "O2", "CO2", "NaCl"],
        correctAnswer: "H2O",
    },
    {
        question: "Who is known as the 'Father of the Nation' in India?",
        choices: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhash Chandra Bose", "Sardar Patel"],
        correctAnswer: "Mahatma Gandhi",
    },
    {
        question: "What is the smallest state in India by area?",
        choices: ["Sikkim", "Goa", "Tripura", "Manipur"],
        correctAnswer: "Goa",
    },
    {
        question: "Which is the longest river in India?",
        choices: ["Ganga", "Yamuna", "Brahmaputra", "Godavari"],
        correctAnswer: "Ganga",
    },
    {
        question: "Which is the national flower of India?",
        choices: ["Rose", "Sunflower", "Lotus", "Marigold"],
        correctAnswer: "Lotus",
    },
    {
        question: "What is the currency of India?",
        choices: ["Rupee", "Dollar", "Euro", "Yen"],
        correctAnswer: "Rupee",
    }
];

let score=0;
let questionCounter=0;

const startBtn=document.getElementById('start-btn');
const questionContainer=document.getElementById('question-container');
const questionText=document.getElementById('question-text');
const choicesList=document.getElementById('choices-list');
const nextBtn=document.getElementById('next-btn');
const resultConatiner=document.getElementById('result-container');
const restart=document.getElementById('restart-btn');
const scoreContainer=document.getElementById('score');

startBtn.addEventListener('click',()=>{
    startBtn.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    renderQuestion();
})


function renderQuestion(){
    questionText.innerText=questions[questionCounter].question;
    let choices=questions[questionCounter].choices;
    choicesList.innerText="";
    choices.forEach((c)=>{
        let li=document.createElement('li');
        li.innerHTML=`${c}`
        li.addEventListener('click',()=> selectAnswer(c));
        choicesList.appendChild(li);
    })
    console.log(questionCounter);
}

function selectAnswer(c){
    nextBtn.classList.remove('hidden');
    if(c==questions[questionCounter].correctAnswer){
        score++;
        // console.log(score);
    }
}

nextBtn.addEventListener('click',()=>{
    questionCounter++;
    if(questionCounter>questions.length-1){
        showResult();
    }
    else{
        renderQuestion();
    }
});


function showResult(){
    questionContainer.classList.add('hidden');
    resultConatiner.classList.remove('hidden');
    restart.classList.remove('hidden');
    scoreContainer.innerText=`${score} out of ${questions.length}` ;


}

restart.addEventListener('click',restartQuiz)

function restartQuiz(){
    questionCounter=0;
    score=0;
    resultConatiner.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    renderQuestion();
}