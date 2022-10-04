window.addEventListener("DOMContentLoaded", (event) => {
  getCount();
});

const functionApiUrl = "https://rw-azureresumecounter.azurewebsites.net/api/GetResumeCounter?code=obdJmdZP8YOlpkmJrxSWEVJuWjw4Urf9qFCHokj7XLAhAzFu4-qkeA==";
const localfunctionApi = "http://localhost:7071/api/GetResumeCounter";

const getCount = () => {
  let count = 30;
  fetch(functionApiUrl)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log("Website called function API.");
      count = response.count;
      document.getElementById("counter").innerText = count;
    })
    .catch(function (error) {
      console.log(error);
    });
  return count;
};
