import React from "react";

const Navigation = ({ data, changeData }) => {
  const { page } = data;


  const handleClick = (num) =>{
    changeData({...data, page: num});
  }

  return (
    <div className="pagination">
      <button>Prev</button>
      <button>1</button>
      <button onClick={()=>{handleClick(2)}}>2</button>
      <button>3</button>
      <button>Next</button>
    </div>
  );
};

export default Navigation;