import React from "react"

//Se importa la función connect de react-redux. Esta función recibe otra función,
//En la segunda función se recibe el componente players.
import {connect} from "react-redux"

const Players  = ({players, addTitularPlayer, addSubstitutePlayer }) => (
    <section>
        <h2>jugadores</h2>
        <div className="players-contents">
            {
                players.map(player =>(
                    <articule className="player" key={player.id}>
                        <img src={player.photo} alt={player.name}/>
                        <h3>{player.name}</h3>
                        <div>
                            <button onClick={() => addTitularPlayer(player)}>Titular_Player</button>
                            <button onClick={() => addSubstitutePlayer(player)}>Substitute_Player</button>
                        </div>
                    </articule>
                ))
            }
        </div>
    </section>
)

//Esta función recibe un estado y retorna un objeto
const mapStateToProps = state => ({
    players: state.players
})

//Aquí viene las funciones que se convierten en propiedades
const mapDispatchToProps = dispatch => ({
    addTitularPlayer(player){
        dispatch({
            type: "add_titular_player",
            player
        })
    },
    addSubstitutePlayer(player){
        dispatch({
            type: "add_substitute_Player",
            player
        })
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(Players);
/**
 * La función connect recibe dos funciones.
 * mapStateToProps: Esta función hace un mapeo de los estados y los convierte en propiedades
 * mapDispatchToProps: Esta función mapea las funciones y las convierte en propiedades
 * En caso tal de que no se vaya a usar alguna de estas funciones, se reemplaza por un 
 * objeto vacio {}
 */