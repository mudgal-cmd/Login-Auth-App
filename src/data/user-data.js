const axios = require("axios");

async function fetchDataFromApi(){

  const dataObject = await axios.get("https://fakestoreapi.com/users");

  const rawUserData = dataObject.data;
  
  return rawUserData;

}

// const userPromise = axios.get("https://fakestoreapi.com/users");

module.exports = fetchDataFromApi;