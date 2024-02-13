import { AppState } from "../AppState.js";
import { Question } from "../models/Question.js";
import { Pop } from "../utils/Pop.js";
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

    async selectAnswer(question, userAnswer) {
        console.log(question, userAnswer)
        const currentQuestion = AppState.questions.find(activeQuestion => activeQuestion == question)
        if (currentQuestion.correctAnswer == userAnswer) {
            window.alert('winner')
        } else { window.alert('loser') }

        AppState.emit('questions')
    }



    // const activeQuestion = AppState.questions.find(({ question }) => question == AppState.questions)
    // console.log('active question', activeQuestion)

    // // try {
    // const activeQuestion = AppState.questions.find(({ question }) => question == AppState.questions)
    // console.log('active question', activeQuestion)
    // if (userAnswer == activeQuestion.correctAnswer) {
    //     await Pop.confirm('Correct!')
    //     }
    //     } catch(error) {
    //     await Pop.confirm('Wrong answer!')
    // }
    //     AppState.emit('questions')
}

// setActiveQuestion(){
//     let activeQuestion = ''
//     for(let i = 0; i < AppState.questions.length; i++){
//     activeQuestion = AppState.questions[i]}



export const questionsService = new QuestionsService()