import axios from 'axios';

const startIndex = 0;
const endIndex = 1;
const createdDate = '2024-12-21';

//const REST_API_LIST_URL = "http://localhost:8080/v1/users/get?startIndex=${startIndex}&endIndex=${endIndex}&createdDate={createdDate}"

const REST_API_LIST_URL = "http://localhost:8080/v1/users/get?startIndex=0&endIndex=10&createdDate=2024-12-21"
export const listEmployees = () => axios.get(REST_API_LIST_URL);

const REST_API_CREATE_URL ="http://localhost:8080/v1/users/create"
export const createEmployee = () => axios.get(REST_API_CREATE_URL)

