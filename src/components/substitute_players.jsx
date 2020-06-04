import React from 'react';

import {connect} from "react-redux";

const Substitute_Players = ({substitute_players, eraseSubstitutePlayer}) => (
    <section>
        <h2>Substitute Player</h2>
        <div classname="camp">
            {
                substitute_players.map(player => (
                    <articule classname="substitute_Players" key={player.id}>
                        <div>
                           <img src={player.photo} alt={player.name}/>
                           <button onClick={() => eraseSubstitutePlayer(player)}> X </button>
                        </div>
                        <p>{player.name}</p>
                    </articule>
                ))
            }
        </div>
    </section>
);

//Esta función recibe un estado y retorna un objeto
const mapStateToProps = state => ({
    substitute_players: state.substitute_players
});

const mapDispatchToProps = dispatch => ({
    eraseSubstitutePlayer(player){
        dispatch({
            type: "erase_substitute_player",
            player
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Substitute_Players)