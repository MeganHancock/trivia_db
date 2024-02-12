export class Questions {
    constructor(data) {
        this.type = data.type
        this.category = data.category
        this.question = data.question
        this.correctAnswer = data.correct_answer
        this.incorrectAnswers = data.incorrect_answers
    }
}

const questionsData = {

    "type": "boolean",
    "difficulty": "medium",
    "category": "Science &amp; Nature",
    "question": "A defibrillator is used to start up a heartbeat once a heart has stopped beating.",
    "correct_answer": "False",
    "incorrect_answers": ["True"]

}