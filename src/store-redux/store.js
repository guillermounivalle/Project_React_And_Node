import {createStore} from "redux";

import photo_player from '../resource/photos_players/Guillermo Hernández Foto fondo Azul.jpg'

/**Estado inicial se indica cual es para que cuando ncargue la pàgina por primera vez
 * no cargue un estado "undefined" y genere error
 */
const initialState = {
    players: [{
        id: 1,
        name: "Guille 01",
        photo:photo_player
    },{
        id: 2,
        name: "Guille 02",
        photo:photo_player
    },{
        id: 3,
        name: "Guille 03",
        photo:photo_player
    },{
        id: 4,
        name: "Guille 04",
        photo:photo_player
    }],
    titular_players: [],
    substitute_players: []
}

const reducerCoach =(state = initialState, action) => {
    return state;
}


export default createStore(reducerCoach);