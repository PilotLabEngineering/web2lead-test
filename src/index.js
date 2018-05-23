// Web To Lead Url
const webToLeadUrl = 'https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8';
const webToLeadProxyUrl = 'https://us-central1-gpp-salesforce-test.cloudfunctions.net/webToLead'

// Get References to Inputs & Button
const asyncSubmitBtn = document.getElementById("async_submit_btn");
const proxySubmitBtn = document.getElementById("proxy_submit_btn");
const oid = document.getElementById("oid");
const retUrl = document.getElementById("retUrl");
const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const email = document.getElementById("email");

// Post Data
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
      "Content-Type": "text/html"
    },
    method: 'POST',
    mode: 'no-cors',
    redirect: 'follow',
    referrer: 'no-referrer',
  });
}


// Get Input Data
const getInputData = () => ({
  oid : oid.value,
  retUrl : retUrl.value,
  first_name : first_name.value,
  last_name : last_name.value,
  email : email.value,
})

// Async Submit Button Click
asyncSubmitBtn.onclick = e => {
  const data = getInputData();
  postData(webToLeadUrl, data)
    .then(res => console.log(res))
    .catch(error => console.error(error)
  );
};

// Proxy Submit Button Click
proxySubmitBtn.onclick = e => {
  const data = getInputData();
  postData(webToLeadProxyUrl, data)
    .then(res => console.log(res))
    .catch(error => console.error(error)
  );
};
