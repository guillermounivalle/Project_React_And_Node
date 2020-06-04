import React from 'react';

/**
 * Componente provider es de la libreria react-redux. Debe envolver toda la aplicación.
 */
import {Provider} from "react-redux";

//Importamos el store
import store from "./store-redux/store";

import Players from './components/players';
import SelectedTeam from './components/selectedteam';

const App = () => (
      <Provider store={store}>
        <main>
         <h1>ED manager</h1>
         <Players/>
         <SelectedTeam/>
       </main>
      </Provider>
    );


export default App;
