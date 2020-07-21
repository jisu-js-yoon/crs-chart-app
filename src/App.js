import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Main from "pages/main/Main";
import Admin from "pages/admin/Admin";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Main} />
      <Route path="/admin" exact={true} component={Admin} />
    </HashRouter>
  );
}

export default App;
