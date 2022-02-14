import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router";

import Login from './pages/login';
import { Register } from './pages/register';
import Routes from './routes/Routes';

import ProtectedDashboard from './routes/ProtectedDashboard';
import DashBoard from './pages/dashboard';

import { connect } from "react-redux";
import { getToken } from "./redux/actions/index";

function App(props) {

  React.useEffect(() =>{
    props.getToken(localStorage.getItem('token2'))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


  return (
    <div className="App">
     <Switch>
        <ProtectedDashboard exact path="/inicio" component={DashBoard} />
        <Routes exact path="/register" component={Register} />
        <Routes exact path="/" component={Login} />
      </Switch>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    authToken: state.authToken,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getToken: (token) => dispatch(getToken(token)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
