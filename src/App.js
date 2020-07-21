import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Main from "pages/main/Main";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Main} />
    </HashRouter>
  );
}

export default App;
