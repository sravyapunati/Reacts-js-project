import axios from 'axios';

// const startIndex = 0;
// const endIndex = 5;
const createdDate = new Date();
const year = createdDate.getFullYear();
const month = String(createdDate.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed, so add 1
const day = String(createdDate.getDate()).padStart(2, "0");  //Dates are 

//const formattedDate = `${year}-${month}-${day}`;
const formattedDate =`2025-01-05`;

console.log("Created Month"+createdDate.getMonth())
console.log("Created Date"+day)


console.log("LocalDate"+formattedDate)
//const REST_API_LIST_URL = "http://localhost:8080/v1/users/get?startIndex=${startIndex}&endIndex=${endIndex}&createdDate={createdDate}"

// const REST_API_LIST_URL = `http://localhost:8080/v1/users/get?startIndex=${startIndex}&endIndex=${endIndex}&createdDate=${formattedDate}`
// export const listEmployees = (startIndex) => axios.get(REST_API_LIST_URL);
// export const listEmployees = (data) => axios.get(REST_API_LIST_URL,data,{
//   headers:{
//     "content-type":"application/json"
//   }
// })

export const listEmployees = (startIndex, endIndex, formattedDate) => {
    const REST_API_LIST_URL = `http://localhost:8080/v1/users/get?startIndex=${startIndex}&endIndex=${endIndex}&createdDate=${formattedDate}`;
    return axios.get(REST_API_LIST_URL);
};

const REST_API_CREATE_URL ="http://localhost:8080/v1/users/create"
//  export const createEmployee = (data) => axios.post(REST_API_CREATE_URL, data, {
//      headers: {
//          "Content-Type":"application/json"
//      },
//  });

export const createEmployee = async (emp) => {
  
    const response = await fetch(REST_API_CREATE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set header for JSON data
      },
      body: JSON.stringify(emp), // Convert the employee object to JSON
    });
  
    return response;
  };

  // const test = async(e)=>{
  //   const res= await fetch(url,{
  //     method:'POST',
  //     headers:{
  //       'content-type':'application/json'
  //     },
  //     body:JSON.stringify(e)
  //   });
  //   return res;
  // }

  