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
    if (!pageValid) {
    } else {
      changeData({ ...data, page: num });
    }
  };

  const nextPage = () => {
    const dataCopy = { ...data };
    console.log("page num: "+page)

    if (!pageValid) {
      handlePageInvalid();
    } else {
      console.log("page is valid");

      // update the page status to completed
      const newArr = data.pagesArr.map((pageObj) => {
        if ((pageObj.number === page && pageObj.completed === false)) {
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
      <button onClick={prevPage}>Prev</button>
      <button>1</button>
      <button
        onClick={() => {
          changePage(2);
        }}
      >
        2
      </button>
      <button>3</button>
      <button onClick={nextPage}>Next</button>
    </div>
  );
};

export default Navigation;
