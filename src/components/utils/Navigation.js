import React from "react";

const Navigation = ({ data, changeData }) => {
  const { page } = data;

  return (
    <div className="pagination">
      <button>Prev</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>Next</button>
    </div>
  );
};

export default Navigation;
