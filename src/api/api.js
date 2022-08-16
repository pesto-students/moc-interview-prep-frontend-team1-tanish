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