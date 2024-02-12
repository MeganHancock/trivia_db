import { AppState } from "../AppState.js";
import { Question } from "../models/Question.js";
import { questionsApi } from "./AxiosService.js";

class QuestionsService {

    async getQuestions() {
        const response = await questionsApi.get('?amount=10&type=multiple')
        console.log('got questions frm api', response.data);
        console.log('looking at data frm api', response.data.results[0]);
        const newQuestions = response.data.results.map(questionPOJO => new Question(questionPOJO))
        console.log('questions not a pojo', newQuestions)

        AppState.questions = newQuestions
    }

}

export const questionsService = new QuestionsService()