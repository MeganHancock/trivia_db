// @ts-ignore
export const questionsApi = axios.create({

    baseURL: 'https://opentdb.com/api.php?amount=10',
    timeout: 8000,

})