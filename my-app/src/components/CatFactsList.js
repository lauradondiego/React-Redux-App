import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { getData } from "../actions";

import CatFacts from "./CatFacts";

//connect to redux and import into index.js in src
const CatFactsList = props => {
  console.log("props", props);
  return (
    <>
      <h1>Welcome to Cat Fact App!</h1>
      <button onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="tailspin" color="#00BFFF" height="15" width="100" />
        ) : (
          "Get Cat Data"
        )}
      </button>
      {props.cats &&
        props.cats.map(fact => <CatFacts key={fact.name} cat={fact} />)}
    </>
  );
};

const mapStateToProps = state => {
  console.log("state", state);

  return {
    isLoading: state.isLoading,
    cats: state.cats
  };
};

export default connect(
  mapStateToProps,
  // if you dont need maptstatetoprops pass in null instead
  { getData }
)(CatFactsList);
