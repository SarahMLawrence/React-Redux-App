import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getFact } from "../actions";


const Fact = ({ getFact, fact, isFetching, error }) => {
  useEffect(() => {
    getFact();
  }, [getFact]);

  if (isFetching) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="cat-fact">
      <button onClick={getFact}>Click to see another cat fact</button>
      
      <p className="facts">{fact}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fact: state.fact,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getFact })(Fact);
