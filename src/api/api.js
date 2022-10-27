import axios from 'axios';


//post call 
export async function insertData(url, data) {
    try {
      let res = await axios.post(url, data);
      return { status: "success", res };
    } catch (err) {
      return { status: "failure", err: "Inserting Data Failed" };
    }
  }
 
  //get call 
  export async function getData(url,data) {
    try {
      let res = await axios.get(url,data);
      if(res.data){
        return { status: "Duplicate", res };
      }else{
        return { status: "Unique", res };
      }     
    } catch (err) {
      return { status: "failure", err: "Get Data Failed " };
    }
  }
  export async function getDataAll(url) {
    try {
      let res = await axios.get(url);
      return { status: "success", res };
    } catch (err) {
      return { status: "failure", err: "Get Data Failed" };
    }
  }

  //get call for signin 
  export async function getDataSignIn(url,data) {
    try {
      let res = await axios.get(url,data);
      if(res.data){
        return { status: "OLD_USER", res };
      }else{
        return { status: "NEW_USER", res };
      }     
    } catch (err) {
      // console.log(err);
      return { status: "failure", err: "Get Data Failed " };
    }
  };


  // Update Call
export async function updateData(url, data) {
  try {
    let res = await axios.post(url, data);
    return { status: "success", res };
  } catch (err) {
    return { status: "failure", err: "Updating Data Failed" };
  }
}


// Post Call
export async function createOrder(url, data) {
  try {
    let res = await axios.post(url, data);
    return { status: "success", res };
  } catch (err) {
    return { status: "failure", err: "Creating order Failed" };
  }
}


