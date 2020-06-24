import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getImg} from "../actions";


const Image = ({ getImg, file, isFetching, error }) => {
  useEffect(() => {
    getImg();
  }, [getImg]);

  if (isFetching) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="cat-photo">
      <button onClick={getImg}>Click to see another cat image</button>
      <img src={file} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    file: state.file,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getImg })(Image);
