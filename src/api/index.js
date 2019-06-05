import 'whatwg-fetch'

export const getSuccessCriteria = () =>
  window.fetch('http://localhost:3000/successCriteria')
    .then(response => response.json())
    .catch(error => console.log(error));

export const saveSuccessCriteria = data =>
  window.fetch('http://localhost:3000/successCriteria', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => response.json())
    .catch(error => console.log(error));