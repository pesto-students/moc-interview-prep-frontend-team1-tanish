//const baseUrl = "https://mockoncall.herokuapp.com"; // for main Branch 
const baseUrl = "https://mockoncalldev.herokuapp.com"; // for Dev Branch 
 //const baseUrl = "http://localhost:5000";// For Local 


//insert 
export const insertStudent = baseUrl + "/student/addData";
export const insertInterviewer = baseUrl + "/interviewer/addData";
export const insertQuery = baseUrl + "/query/addData";


//Find
export const findStudent = baseUrl + "/student/getData/email";
export const findInterviewer = baseUrl + "/interviewer/getData/email";




