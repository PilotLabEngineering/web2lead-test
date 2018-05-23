const admin = require('firebase-admin');
const postData = require('./post-data');

const webToLeadUrl = 'https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8';

const webToLead = (req, res) => {
  postData(webToLeadUrl, req.body)
    .then(data => {
      console.log(data);
      return res.status(200).send('ok');
    })
    .catch(error => {
      console.error(error);
      return res.status(400).send(error);
    });
};

module.exports = webToLead;
