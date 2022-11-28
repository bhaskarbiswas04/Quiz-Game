const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello to my land",
        b: "Hey Text Markup Language",
        c: "HyperText Makeup Language",
        d: "HyperText Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: Inside which HTML element do we put the JavaScript?",
        a: "<js>",
        b: "<scripting>",
        c: "<script>",
        d: "<javascript>",
        ans: "ans3"
    },
    {
        question: "Q3: Which of the following is correct about features of JavaScript?",
        a: "JavaScript is a lightweight, interpreted programming language.",
        b: "JavaScript is designed for creating network-centric applications.",
        c: "JavaScript is complementary to and integrated with Java.",
        d: "All of the above.",
        ans: "ans4"
    },
    {
        question: "Q4: How can you get the total number of arguments passed to a function?",
        a: " Using args.length property",
        b: "Using arguments.length property",
        c: "Both of the above",
        d: "None of the above.",
        ans: "ans2"
    },
    {
        question: "Q5: Which of the following type of variable takes precedence over other if names are same?",
        a: "global variable",
        b: "local variable",
        c: "Both of the above",
        d: "None of the above.",
        ans: "ans2"
    },
    {
        question: "Q6: Which built-in method returns the characters in a string beginning at the specified location?",
        a: "substr()",
        b: "getSubstring()",
        c: "Slice()",
        d: "None of the above.",
        ans: "ans1"
    }
];

//References
const ques = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");


let questionCount = 0;
let score = 0;

//This Function loads questions.
function loadQuestion() {
    const questionList = quizDB[questionCount];

    ques.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

//This Function check whether the user answer is correct or not.
function getCheckAnswer() {
    let answer;

    answers.forEach((currAnsElem) => {
        if (currAnsElem.checked) {
            answer = currAnsElem.id;
        }
    })
    return answer;
};

//This Function de-select the checked mark after question changes.
function deSelectAll() {
    answers.forEach((currAnsElem) => {
        currAnsElem.checked = false;
    })
}

loadQuestion();

submit.addEventListener("click", () => {
    const checkedAnswer = getCheckAnswer();
    if(checkedAnswer === quizDB[questionCount].ans)
    {
        score++;
    }

    questionCount++;

    deSelectAll();

    if(questionCount < quizDB.length)
    {
        loadQuestion();
    }else{
        showScore.classList.remove('scoreArea');
        showScore.innerHTML = `
            <h3> Your Score is ${score} / ${quizDB.length}  </h3>
            <button class="btn" onclick="location.reload()">Try Again</button>
        `;
    }
})