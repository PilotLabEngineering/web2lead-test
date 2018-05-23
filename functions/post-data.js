const fetch = require('node-fetch');

const postData = (url, data) => {
  //
  console.log('Sending', data);
  //
  return fetch(url, {
    body: JSON.stringify(data),
    cache: 'no-cache',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      "Content-Type": 'text/html'
    },
    method: 'POST',
    mode: 'no-cors',
    redirect: 'follow',
    referrer: 'no-referrer',
  });
}

module.exports = postData;
