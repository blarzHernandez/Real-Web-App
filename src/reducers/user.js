import { USER_LOGGED_IN } from "../types";
export default function user(state = {}, action = {}){
    
    switch(action.type){

        case USER_LOGGED_IN:
            //return new state for this particular piece of state and this
            //pieces of state is action.user 
            return action.user;

        default:return state;
    }
}