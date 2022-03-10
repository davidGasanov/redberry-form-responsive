import React from "react";

const Navigation = ({
  data,
  changeData,
  pageValid,
  setPageValid,
  handlePageInvalid,
}) => {
  const { page } = data;

  const changePage = (num) => {
    if (data.pagesArr[num-1].completed) {
      changeData({ ...data, page: num })
    } 
  };

  const nextPage = () => {
    const dataCopy = { ...data };
    console.log("page num: " + page);

    if (!pageValid) {
      handlePageInvalid();
    } else {
      console.log("page is valid");

      // update the page status to completed
      const newArr = data.pagesArr.map((pageObj) => {
        if (pageObj.number === page && pageObj.completed === false) {
          return { number: page, completed: true };
        } else {
          return pageObj;
        }
      });

      dataCopy.page = page + 1;
      dataCopy.pagesArr = newArr;

      changeData(dataCopy);
    }
  };

  const prevPage = () => {
    changeData({ ...data, page: page - 1 });
  };

  return (
    <div className="pagination">
      <button className="prev-page" onClick={prevPage}></button>
      {data.pagesArr.map((pageObj) => {
        if (pageObj.number === page){
          return (
            <button
              className="page-completed"
            ></button>
          )
        } else if (pageObj.completed) {
          return (
            <button
              className="page-completed"
              value={pageObj.number}
              onClick={()=>{changePage(pageObj.number)}}
            ></button>
          );
        } else {
          return <button className="page-not-completed"></button>;
        }
      })}
      <button className="next-page" onClick={nextPage}></button>
    </div>
  );
};

export default Navigation;
