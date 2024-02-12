import { AppState } from "../AppState.js"
import { questionsService } from "../services/QuestionsService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawQuestion() {
    for (let i = 0; i < AppState.questions.length; i++) {
        const question = AppState.questions[i].QuestionAndAnswersHTMLTemplate
        setHTML('questionCard', question)
    }
}

export class QuestionsController {

    constructor() {
        console.log('controller locked n loaded')
        this.getQuestions()

        AppState.on('questions', _drawQuestion)
    }

    async getQuestions() {
        try {
            await questionsService.getQuestions()
            Pop.success('received questions')
        } catch (error) {
            Pop.error(error)
            console.log(error);
        }

    }

    selectAnswer(question, userAnswer) {
        questionsService.selectAnswer(question, userAnswer)
    }
}