import axios from 'axios';
import { ERROR_FETCH, FETCH_POSTS, SUCCESS_FETCH } from './types';

export const getPosts = () => {
    // во время асинхрноого запроса нам возращается колбэк функция с dispatch
    return async (dispatch) => {
        try {
            // при запросе меняем экшн чотбы в store поменять флажок loading на true
            dispatch({ type: FETCH_POSTS });
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            // после того как мы получили данные мы отправялем SUCCESS_FETCH чтобы положить данные из сервера в наш store
            // кроме того этим экшнм мы говорим чтобы прекратилась всз загурзка
            dispatch({ type: SUCCESS_FETCH, payload: response });
        } catch (error) {
            // если у нас будет проблема в запросе то отправляем экшн для того чтобы флажок для отраборжения ошибок стал активным
            dispatch({ type: ERROR_FETCH })
        }
    }
}