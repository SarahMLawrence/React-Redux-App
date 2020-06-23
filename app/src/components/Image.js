import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getImg} from "../actions";

const Image = ({ getImg, img, isFetching, error }) => {
  useEffect(() => {
    getImg();
  }, [getImg]);

  if (isFetching) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <h2>Cat Image: {img}</h2>
      <button onClick={getImg}>Click to see another cat image</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    img: state.img,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getImg })(Image);
