import fetchJSON from "app/fetchJSON"
import consts from "app/consts"

export const GET = "molotov/albums/GET"
export const SET = "molotov/albums/SET"
export const ERROR = "molotov/albums/ERROR"

const initialState = {

}

const format = (data) => {
    const {items} = data
    let result = {items}

    console.log(result);
    return result
}

// redux reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {

    case GET:
        return {
            wait:true,
        }

    case SET:
    console.log("tracks");

      return {
           ...format(action.response)
      }

    case ERROR:
        /* eslint-disable no-console */
        console.error(ERROR, action.error)
        /* eslint-disable no-console */
        return {
            error: (
                action.error && action.error.data &&
                action.error.data.error && action.error.data.error.user_message
            ) || true
        }

    default:
        return state
    }
}

// redux actions
export function get(id) {

    return {
        types: [
            GET,
            SET,
            ERROR,
        ],
        promise: (
            fetchJSON(consts.api.enpoints.getAlbums(id), {
                method: "GET",
                headers : {
                  "Content-Type": "application/json",
                }
            })
        )
    }
}