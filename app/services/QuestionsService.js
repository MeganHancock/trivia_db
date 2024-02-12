import { questionsApi } from "./AxiosService.js";

class QuestionsService {

    async getQuestions() {
        const response = await questionsApi.get('&category=17&type=boolean')
        console.log('got questions frm api', response.data)
    }

}

export const questionsService = new QuestionsService()