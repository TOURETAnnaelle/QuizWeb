const progressText = document.getElementById('progressText')
const scoreText = document.getElementById('score')
const number = document.getElementById('number')
const questionNumber = document.getElementById('questionNumber')
const letScore = document.getElementById('letScore')
const NumberScore = document.getElementById('score')
const start = document.getElementById('start-btn')
const next = document.getElementById('next-btn')
const begin = document.getElementById('image_text')
const end = document.getElementById('end-btn')
const quiz = document.getElementById('question-container')
    //questionContenairElement
const questionQuiz = document.getElementById('question')
    //questionElement
const answerQuiz = document.getElementById('answer-buttons')
    //answerButtonsElement
let CurrentQuestion, QuizQuestion;
let score = 0
let numberQ = 1


start.addEventListener('click', StartGame);
next.addEventListener('click', NextQuestion)




function StartGame() {
    console.log('Started')
    QuizQuestion = questions.sort(() => Math.random() - .5);
    next.innerText = 'Next'
    progressText.innerText = 'Question'
    progressText.style.color = 'black'
    start.classList.add('hide')
    begin.classList.add('hide')
    end.classList.add('hide')
    QuizQuestion = questions.sort()
    CurrentQuestion = 0
    score = 0
    numberQ = 1
    quiz.classList.remove('hide')
    progressText.classList.remove('hide')
    number.classList.remove('hide')
    questionNumber.classList.remove('hide')
    letScore.classList.remove('hide')
    NumberScore.classList.remove('hide')
    NumberScore.style.color = 'black';
    LaunchQuestion()

}

function LaunchQuestion() {
    if (CurrentQuestion < 5) {
        resetState()
        ShowQuestion(QuizQuestion[CurrentQuestion])
    } else {


        quiz.classList.add('hide')
        next.classList.add('hide')
        CurrentQuestion = 0
        start.innerText = 'Restar the Quiz'
        start.classList.remove('hide')
        end.classList.remove('hide')
            // progressText.classList.add('hide')
        number.classList.add('hide')
        questionNumber.classList.add('hide')
        scoreText.innerText = score

        if (score < 10) {
            progressText.style.color = 'red'
            progressText.innerText = 'You need to learn the article'
            NumberScore.style.color = 'red';
        } else if (score > 30) {
            progressText.innerText = 'Good job'
            NumberScore.style.color = 'green';
            progressText.style.color = 'green';
        } else {

            progressText.innerText = 'You need to practice'
            NumberScore.style.color = 'orange';
            progressText.style.color = 'orange';
        }

    }


}

function ShowQuestion(question) {
    questionQuiz.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        scoreText.innerText = score
        number.innerText = numberQ
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerQuiz.appendChild(button)

    })

}



function resetState() {
    next.classList.add('hide')
    while (answerQuiz.firstChild) {
        answerQuiz.removeChild(answerQuiz.firstChild)
    }
}


function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerQuiz.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)

    })


    if (CurrentQuestion < 4) {
        if (correct) {
            score = score + 10
        } else {
            score = score

        }
        next.classList.remove('hide')
    } else {
        if (correct) {
            score = score + 10
        } else {
            score = score

        }
        next.innerText = 'Submit Quiz'
        next.classList.remove('hide')
    }
    numberQ++
}



function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')

    } else {
        element.classList.add('wrong')
    }
}

// function addScore() {
//     if (correct) {
//         point = 10
//         score += point
//     } else {
//         score = score
//     }

// }

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


function NextQuestion() {
    CurrentQuestion++
    LaunchQuestion()
}

const questions = [{

        question: 'Who is the creator of the cruft?',
        answers: [
            { text: 'Eric Cruft', correct: false },
            { text: 'Brian Cruft', correct: false },
            { text: 'Charles Cruft', correct: true },
            { text: 'Jason Kennel', correct: false }
        ]

    },
    {

        question: 'Which TV channel broadcast the crufts first.',
        answers: [
            { text: 'Itv', correct: false },
            { text: 'BBC', correct: true },
            { text: 'Channel 4', correct: false }

        ]
    },
    {

        question: 'At first the crufts were :',
        answers: [
            { text: 'A dog show', correct: true },
            { text: 'An agility competition', correct: false },
            { text: 'An obedience competition', correct: false }

        ]
    },
    {

        question: 'Crufts has been officially recognised by the Guinness Book of Records',
        answers: [
            { text: 'True', correct: true },
            { text: 'False', correct: false }

        ]
    },
    {

        question: 'Why was the Kennel Club criticised?',
        answers: [
            { text: 'Because there were too many people and not enough space', correct: false },
            { text: 'Because the people were too haughty', correct: false },
            { text: 'Because some names would compromise the health of pedigree dogs', correct: true }

        ]
    },

]