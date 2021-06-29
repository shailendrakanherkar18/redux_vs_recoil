import React, { Suspense, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'

import { RecoilRoot, useRecoilSnapshot } from 'recoil';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from './App';
import UsersContainer from './users';
import UserDetails from './users/UserDetails';

import reportWebVitals from './reportWebVitals';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import store from './store'


function DebugObserver() {
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    // console.debug('The following atoms were modified:');
    // for (const node of snapshot.getNodes_UNSTABLE({isModified: true})) {
      // console.debug(node.key, snapshot.getLoadable(node));
    // }
  }, [snapshot]);

  return null;
}

ReactDOM.render(  
  <React.StrictMode>
    <Provider store={store}>
      <RecoilRoot>
        <DebugObserver />
        <Router>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/users" component={UsersContainer} />
            <Suspense fallback={<div>Loading...</div>}>
            <Route exact path="/users/:userId" component={UserDetails} />
            </Suspense>
          </Switch>
        </Router>
      </RecoilRoot>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
