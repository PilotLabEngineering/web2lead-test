!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";var o=document.getElementById("async_submit_btn"),r=document.getElementById("proxy_submit_btn"),c=document.getElementById("oid"),l=document.getElementById("retUrl"),u=document.getElementById("first_name"),i=document.getElementById("last_name"),s=document.getElementById("email"),a=function(){return{oid:c.value,retUrl:l.value,first_name:u.value,last_name:i.value,email:s.value}};o.onclick=function(e){var t=a();fetch("https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",{body:JSON.stringify(t),cache:"no-cache",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept","Content-Type":"text/html"},method:"POST",mode:"no-cors",redirect:"follow",referrer:"no-referrer"}).then(function(e){return console.log(e)}).catch(function(e){return console.error(e)})},r.onclick=function(e){var t=a();fetch("https://us-central1-gpp-salesforce-test.cloudfunctions.net/webToLead",{body:JSON.stringify(t),cache:"no-cache",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept","Content-Type":"application/json"},method:"POST",redirect:"follow",referrer:"no-referrer"}).then(function(e){return console.log(e)}).catch(function(e){return console.error(e)})}},
/*!*************************!*\
  !*** multi ./src/index ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){e.exports=n(/*! /home/tunde/Documents/gpp-we-project/web2lead-test/src/index */0)}]);
//# sourceMappingURL=main.js.map