import React from "react";

const Navigation = ({ data, changeData, valid, setWatchAll }) => {
  const { page } = data;


  const changePage = (num) =>{
    if(!valid){
      setWatchAll(true);
    } else {
      changeData({...data, page: num});
    }
  }

  return (
    <div className="pagination">
      <button>Prev</button>
      <button>1</button>
      <button onClick={()=>{changePage(2)}}>2</button>
      <button>3</button>
      <button onClick={changePage}>Next</button>
    </div>
  );
};

export default Navigation;