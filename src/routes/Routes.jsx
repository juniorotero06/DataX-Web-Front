import React from "react";
import { Redirect, Route } from "react-router";
import { connect } from "react-redux";

const Routes = ({ component: Component, authToken, ...rest }) => {
    return (
        <Route
      {...rest}
      render={(props) => {
        if (!authToken) return <Component {...props} />;
        if (authToken) return <Redirect to="/inicio" />;
      }}
    />
    );
}

function mapStateToProps(state) {
    return {
      authToken: state.authToken,
    };
  }
  
  export default connect(mapStateToProps)(Routes);