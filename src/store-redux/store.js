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
    
    switch (action.type) {
        case "add_titular_player":
            return{
                ...state,
                titular_players: state.titular_players.concat(action.player),
                players: state.players.filter(player => player.id !== action.player.id)
            }
        case "add_substitute_Player":
            return{
                ...state,
                substitute_players: state.substitute_players.concat(action.player),
                players: state.players.filter(player => player.id !== action.player.id)
            }
        case "erase_titular_player":
            return{
                ...state,
                titular_players: state.titular_players.filter(player => player.id !== action.player.id),
                players: state.players.concat(action.player),
            }        

        case "erase_substitute_player":
            return{
                ...state,
                substitute_players: state.substitute_players.filter(player => player.id !== action.player.id),
                players: state.players.concat(action.player),
            }            
        default:
            break;
    }

    return state;
}


export default createStore(reducerCoach);