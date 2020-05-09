import React from "react";
import "./App.css";
import { history } from './store';
import { ConnectedRouter } from "connected-react-router";
import Router from './router';

function App() {
  return (
    <ConnectedRouter history={history}>
      {/* <ScrollToTop> */}
        <div className="App">
          <div className="wrapper">
            <Router />
          </div>
        </div>
      {/* </ScrollToTop> */}
    </ConnectedRouter>
  );
}

export default App;
