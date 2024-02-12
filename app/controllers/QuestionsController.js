import { AppState } from "../AppState.js"
import { questionsService } from "../services/QuestionsService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawQuestion() {
    const questions = AppState.questions
    let htmlString = ''
    questions.forEach(question => htmlString += question.QuestionAndAnswersHTMLTemplate)
    setHTML('questionCard', htmlString)
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

        // setActiveQuestion(){
        //     questionsService.setActiveQuestion()
        // }
    }
}