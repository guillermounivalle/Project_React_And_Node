import React, { Component } from 'react';


/**
 * Componente provider es de la libreria react-redux. Debe envolver toda la aplicación.
 */
import {provider} from "react-redux"

//Importamos el store
import store from "./store-redux/store"
class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <main>
         <h1>ED manager</h1>
         <Players/>
         <SelectedTeam/>
       </main>
      </Provider>
    );
  }
}

export default App;
