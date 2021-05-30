import { LOGOUT_USER, SET_USER } from "./usersActions";

const initialState = {
    user: null
}

const userReducers = (state = initialState, action) => {
    switch(action.type){
        case SET_USER:
            return{
                user: action.payload
            }
        
        case LOGOUT_USER:
            return{
                user: null
            }

        default:
            return state;
    }
}

export default userReducers;