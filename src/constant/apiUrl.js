//const baseUrl = "https://mockoncall.herokuapp.com"; // for main Branch 
//const baseUrl = "https://mockoncalldev.herokuapp.com"; // for Dev Branch 
const baseUrl = "http://localhost:5000";// For Local 


//insert 
export const insertStudent = baseUrl + "/student/addData";
export const insertInterviewer = baseUrl + "/interviewer/addData";
export const insertQuery = baseUrl + "/query/addData";


//Find
export const findStudent = baseUrl + "/student/getData/email";
export const findInterviewer = baseUrl + "/interviewer/getData/email";


//get 
export const getInterviews = baseUrl + "/interviews/getData";
export const getStudents = baseUrl + "/student/getData";
export const getInterviewers = baseUrl + "/interviewer/getData";

// FindbyId
export const getInterviewerById = baseUrl + "/interviewer/getData/";
export const getStudentById = baseUrl + "/student/getData/";



