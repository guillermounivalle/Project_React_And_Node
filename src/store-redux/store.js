import {createStore} from "redux";

/**Estado inicial se indica cual es para que cuando ncargue la pàgina por primera vez
 * no cargue un estado "undefined" y genere error
 */
const initialState = {
    players: [],
    titular_players: [],
    substitute_players: []
}

const reducerCoach =(state = initialState, action) => {
    return state;
}


export default createStore(reducerCoach);