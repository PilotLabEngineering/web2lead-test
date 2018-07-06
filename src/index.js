// Web To Lead Url
const webToLeadUrl = 'https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8';
const hiddenIframeID = "gpp_salesforce_iframe";

// Get References to Inputs & Button
const asyncSubmitBtn = document.getElementById("async_submit_btn");
const proxySubmitBtn = document.getElementById("proxy_submit_btn");
const oid = document.getElementById("oid");
const retUrl = document.getElementById("retUrl");
const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const email = document.getElementById("email");
const debug = document.getElementById("debug");
const debugEmail = document.getElementById("debugEmail");

// Get Input Data
const getInputData = () => ({
  oid : oid.value,
  retUrl : retUrl.value,
  first_name : first_name.value,
  last_name : last_name.value,
  email : email.value,
  debug : debug.value,
  debugEmail : debugEmail.value,
});

const submitToSalesforce = (fields) => {
  if(!document.getElementById(hiddenIframeID)){
    var salesForceIframe=document.createElement("iframe");
    salesForceIframe.id=hiddenIframeID;
    salesForceIframe.name=hiddenIframeID;
    salesForceIframe.src='about:blank';
    salesForceIframe.style.display='none';
    document.body.appendChild(salesForceIframe);
  }
  var form = document.createElement("form");
  form.action = webToLeadUrl;
  form.setAttribute("target", hiddenIframeID);

  Object.entries(fields).forEach(([key, value]) => {
    var fieldInput = document.createElement("input");
    fieldInput.name = key;
    fieldInput.value = value;
    fieldInput.setAttribute("type", "hidden");
    form.appendChild(fieldInput);
  });
  document.body.appendChild(form);
  form.submit();
}

// Async Submit
asyncSubmitBtn.onclick = e => {
  const fields = getInputData();
  submitToSalesforce(fields);

  // fetch(webToLeadUrl, {
  //   body: fields,
  //   cache: 'no-cache',
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  //     'Accept': 'text/html',
  //     'Content-Type': 'text/html'
  //   },
  //   method: 'POST',
  //   mode: 'no-cors',
  // })
  //   .then(res => console.log(res))
  //   .catch(error => console.error(error)
  // );
};
