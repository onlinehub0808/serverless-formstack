import React, { Component } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {BrowserRouter as Router } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Routes from "./routes";
import { store, persistor } from "./store";
import "./assets/base.scss";





library.add(faEdit);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes />
        </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
