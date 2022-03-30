import React from "react";

const Submitpage = ({ data, changeData }) => {
  return (
    <div className="submit-page">
      <button
        className="submit-button"
        onClick={() => {
          setTimeout(() => {
            changeData({ ...data, page: "thank_you" });
          }, 2000);
        }}
      >
        Submit
      </button>
      <button
        className="underline-button"
        onClick={() => {
          changeData({ ...data, page: 4 });
        }}
      >
        go back
      </button>
    </div>
  );
};

export default Submitpage;
