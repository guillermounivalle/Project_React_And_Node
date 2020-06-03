import React, { Component } from 'react';

/**
 * Componente provider es de la libreria react-redux. Debe envolver toda la aplicación.
 */
import {Provider} from "react-redux";

//Importamos el store
import store from "./store-redux/store";

import Players from './components/players';

const App = () => (
      <Provider store = {store}>
        <main>
         <h1>ED manager</h1>
         <Players/>
         
       </main>
      </Provider>
    );


export default App;
