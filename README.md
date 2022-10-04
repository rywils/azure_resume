# azure_resume

Resume hosted on Azure

## Initial

- Frontend folder contains the frontend
- main.js contains visitor counter code.

```js
window.addEventListener("DOMContentLoaded", (event) => {
  getCount();
});

const functionApi = "";

const getCount = () => {
  let count = 30;
  fetch(functionApi)
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
```
