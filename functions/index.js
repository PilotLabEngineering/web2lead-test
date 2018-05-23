const functions = require('firebase-functions');

const webToLead = require('./web-to-lead');
const withCors = require('./with-cors');

// create web to lead with cors and register https function
const webToLeadWithCors = withCors(webToLead);
exports.webToLead = functions.https.onRequest(webToLeadWithCors);
