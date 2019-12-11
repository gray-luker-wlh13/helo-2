const initialState = {
    username: '',
    profile: '',
    userId: 0
}

const GET_USER = 'GET_USER';
const LOGOUT = 'LOGOUT';

export function getUser(userId, username, profile){
    return {
        type: GET_USER,
        payload: {userId, username, profile} 
    }
}

export function logout(){
    return {
        type: LOGOUT,
        payload: null
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_USER:
            return {...state, userId: payload.userId, username: payload.username, profile: payload.username};
        
        case LOGOUT:
            return {...state, userId: payload, username: payload, profile: payload}
        default:
            return state;
    }
}