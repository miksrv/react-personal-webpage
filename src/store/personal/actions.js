import * as types from './actionTypes'

export function fetchVKPostData() {
    return async(dispatch) => {
        var jsonp = require('jsonp')

        const url = `https://api.vk.com/method/wall.get?domain=miktm&offset=0&count=2&access_token=76b8116476b8116476b811645476c8beb3776b876b81164283c20335cf44ae28604a4ab&v=5.52`
        //const url = `https://api.vk.com/method/users.get?user_id=210700286&access_token=76b8116476b8116476b811645476c8beb3776b876b81164283c20335cf44ae28604a4ab&v=5.52`


        await jsonp(url, null, function (err, data) {
            if (err) {
                console.error(err.message);
            } else {
                console.log('response', data);
            }
        })
    }

    // return async(dispatch) => {
    //     const url = `https://api.vk.com/method/users.get?user_id=210700286&access_token=76b8116476b8116476b811645476c8beb3776b876b81164283c20335cf44ae28604a4ab&v=5.52`
    //     //const url = `https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22`
    //
    //     const response = await fetch(url, {
    //         method: 'GET',
    //         //mode: 'no-cors',
    //         crossDomain: true,
    //         headers: {
    //             // Accept: 'application/json',
    //         }
    //     });
    //
    //     console.log('fetchVKPostData', await response.json());
    //         //
    //         // const payload = await response.json();
    //         //
    //         // dispatch({ type: types.GET_VK_POSTS, payload });
    //
    // }
}