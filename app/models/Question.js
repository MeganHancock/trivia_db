export class Question {
    constructor(data) {
        this.type = data.type
        this.category = data.category
        this.question = data.question
        this.correctAnswer = data.correct_answer
        this.incorrectAnswers = data.incorrect_answers
    }

    get QuestionAndAnswersHTMLTemplate() {
        return `
        <section class="row text-center justify-content-around">

        <div class="col-12 display-4 m-5">${this.question}</div>

        <div class="col-5 fs-3 card mb-3" onclick="selectAnswer()">${this.correctAnswer}</div>
        <div class="col-5 fs-3 card mb-3" onclick="selectAnswer()">${this.incorrectAnswers[0]}</div>
        <div class="col-5 fs-3 card" onclick="selectAnswer()">${this.incorrectAnswers[1]}</div>
        <div class="col-5 fs-3 card" onclick="selectAnswer()">${this.incorrectAnswers[2]}</div>
        `
    }

}

// const questionsData = {
//     "type": "multiple",
//     "difficulty": "hard",
//     "category": "Science: Computers",
//     "question": "Which kind of algorithm is Ron Rivest not famous for creating?",
//     "correct_answer": "Secret sharing scheme",
//     "incorrect_answers": [
//         "Hashing algorithm",
//         "Asymmetric encryption",
//         "Stream cipher"
//     ]
// }

// const questionsData = {

//     "type": "boolean",
//     "difficulty": "medium",
//     "category": "Science &amp; Nature",
//     "question": "A defibrillator is used to start up a heartbeat once a heart has stopped beating.",
//     "correct_answer": "False",
//     "incorrect_answers": ["True"]

// }