# Web to Lead Test
- Objective: test webToLead form
- To run this app you will need nodeJs v6+
- To deploy you need a firebase account and the firebase cli `npm install -g firebase-tools`

-------

### Structure

#### Client App
- src/index.html
- src/index.js

#### Firebase function
- functions/index.js
- functions/with-cors.js
- functions/post-data.js
- functions/web-to-lead.js

-------

### Run
1. Install the dependencies
`npm install`

2. Run the dev server
`npm run start`

-------

### Deploy
`npm run build`
and
`firebase deploy`

-------

### Notes
The form data can be submitted in three different ways.

1. The standard form example, appears to be working. However, I have no way of knowing if the user information is actually saved. The form simply redirects back to a URL. Which means, i don't know how to show a verification or error message after the redirect. I suspect the information is not available to client side applications at all.

2. I'm also asynchronously submitting the form data directly from the client side application. The problem here is actually on the client side, as browser vendors do not allow receiving cross-site documents asynchonously, for security reasons'. Salesforce's response is a document and they don't offer another way.

3. Last i tried a proxy microservice. I implemented a firebase function, that receives the form data from our client application and in turn it makes the request to salesforce. This appears to be working or at least as far as i can see, salesforce response looks good, but I wouldn't know how to generate error conditions.
