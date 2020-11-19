export default function reserve(state = [], action){
    switch(action.type){
        case 'ADD_RESERVE':
            return [...state, action.trip]
        default:
            return state
    }
}