import React from 'react';

import {connect} from "react-redux";

const Titular_Players = ({titular_players, eraseTitularPlayer}) => (
    <section>
        <h2>Titular Player</h2>
        <div classname="camp">
            {
                titular_players.map(player => (
                    <articule classname="titular_player" key={player.id}>
                        <div>
                           <img src={player.photo} alt={player.name}/>
                           <button onClick={() => eraseTitularPlayer(player)}> X </button>
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
    titular_players: state.titular_players
});

const mapDispatchToProps = dispatch => ({
    eraseTitularPlayer(player){
        dispatch({
            type: "erase_titular_player",
            player
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Titular_Players)