import React, { useEffect, Suspense } from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import { RecoilRoot, useRecoilSnapshot } from "recoil";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./App";
import UsersReduxContainer from "./users-redux";
import UsersRecoilContainer from "./users-recoil";
import UserReduxDetails from "./users-redux/UserDetails";
import UserRecoilDetails from "./users-recoil/UserDetails";

import reportWebVitals from "./reportWebVitals";

import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import store from "./store";

function DebugObserver() {
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    console.debug('The following atoms were modified:');
    for (const node of snapshot.getNodes_UNSTABLE({isModified: true})) {
    console.debug(node.key, snapshot.getLoadable(node));
    }
  }, [snapshot]);

  return null;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RecoilRoot>
        <DebugObserver />
        <Suspense fallback={<p>Loading...</p>}>
        <Router>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/users-redux" component={UsersReduxContainer} />
            <Route
              exact
              path="/users-recoil"
              component={UsersRecoilContainer}
            />
            <Route
              exact
              path="/users-redux/:userId"
              component={UserReduxDetails}
            />
            <Route
              exact
              path="/users-recoil/:userId"
              component={UserRecoilDetails}
            />
          </Switch>
        </Router>
        </Suspense>
      </RecoilRoot>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
