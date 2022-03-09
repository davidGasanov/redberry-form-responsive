import React from "react";
import { useEffect } from "react";

const Thankyou = ({ data, changeData }) => {
  useEffect(() => {
    setTimeout(() => {
      changeData({ ...data, page: "landing" });
    }, 3000);
  }, []);

  return (
    <div className="submit-page">
      <h1 className="large-title">Thanks for Joining 😊</h1>
    </div>
  );
};

export default Thankyou;
