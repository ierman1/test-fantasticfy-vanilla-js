const BASE_URL = 'https://dog.ceo/api';

export const apiCall = (action, method) => {

    const config = {
        method,
        url: BASE_URL + action
    }

    return axios(config);

}