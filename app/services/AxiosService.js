// @ts-ignore
export const questionsApi = axios.create({

    baseURL: 'https://opentdb.com/api.php?amount=10&category=17&type=boolean',
    timeout: 8000,

})