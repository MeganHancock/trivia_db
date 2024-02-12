import { questionsService } from "../services/QuestionsService.js"
import { Pop } from "../utils/Pop.js"


export class QuestionsController {

    constructor() {
        console.log('controller locked n loaded')
        this.getQuestions()
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
}