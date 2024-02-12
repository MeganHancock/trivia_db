import { questionsApi } from "./AxiosService.js";

class QuestionsService {

    async getQuestions() {
        const response = await questionsApi.get('?amount=10&type=multiple')
        console.log('got questions frm api', response.data);
        // console.log('looking at data frm api', response.results[0])
    }

}

export const questionsService = new QuestionsService()