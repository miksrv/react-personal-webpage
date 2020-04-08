import * as types from './actionTypes'

export function fetchVKPostData() {
    return async(dispatch) => {
        const jsonp = require('jsonp')

        const url = `https://api.vk.com/method/wall.get?domain=miktm&offset=0&count=2&access_token=300403ae300403ae300403aef53074e5c533004300403ae6e8a0d8e3c649eb40ace3368&v=5.52`

        await jsonp(url, null, function (err, data) {
            if (err) {

                console.error(err.message)

            } else {
                const payload = data.response

                dispatch({ type: types.GET_VK_POSTS, payload })
            }
        })
    }
}