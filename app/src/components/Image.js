import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getImg} from "../actions";


const Image = ({ getImg, message, isFetching, error }) => {
  useEffect(() => {
    getImg();
  }, [getImg]);

  if (isFetching) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="cat-photo">
      <button onClick={getImg}>Click to see another dog image</button>
      <img src={message} alt="catPic"/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    message: state.message,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getImg })(Image);
