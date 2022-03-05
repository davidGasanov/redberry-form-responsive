import React from "react";
import { useState, useEffect } from "react";
import Navigation from "../utils/Navigation";
import Field from "../utils/Field";

const Firstpage = ({ data, changeData }) => {

  const [pageValid, setPageValid] = useState(false);
  const [watchAll, setWatchAll] = useState(false);


 const handlePageInvalid=()=>{
    setWatchAll(true);
  }
 
  useEffect(()=>{
    if (data.first_name.valid && data.last_name.valid && data.email.valid && data.phone.valid){
      setPageValid(true);
  
    } else{
      setPageValid(false);
    }
    console.log("Page validity status: "+ pageValid);
  },[data])

  return (
    <div>
      <h1>This is the first page</h1>


      <Field
        changeData={changeData} 
        data={data}
        name={"first_name"}
        label={"First Name"}
        errorMessage={"first name should include at least 3 characters"}
        required={false}
        pattern="^[A-Za-z]{2,}[A-Za-z]$"
        watchAll = {watchAll}
        setWatchAll = {setWatchAll}
      />
      <Field
        changeData={changeData}
        data={data}
        name={"last_name"}
        label={"Last Name"}
        errorMessage={"last name should include at least 3 characters"}
        pattern={"^[A-Za-z]{2,}[A-Za-z]$"}
        required={false}
        watchAll = {watchAll}
        setWatchAll = {setWatchAll}

      />
      <Field
        changeData={changeData}
        data={data}
        name={"email"}
        label={"Your email"}
        errorMessage={"should be a valid email"}
        pattern={"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.][a-z]+$"}
        required={false}
        watchAll = {watchAll}
        setWatchAll = {setWatchAll}

      />
      <Field
        changeData={changeData}
        data={data}
        name={"phone"}
        label={"Phone number"}
        errorMessage={"needs to be formatted according to georgian standards"}
        pattern={"^[+]9955\\d{8}$"}
        required={false}
        watchAll = {watchAll}
        setWatchAll = {setWatchAll}

      />
      
      <Navigation pageValid={pageValid} setPageValid={setPageValid} handlePageInvalid={handlePageInvalid} data={data} changeData={changeData} />
    </div>
  );
};

export default Firstpage;