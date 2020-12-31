import * as functions from 'firebase-functions';
import * as express from "express";
const app = express();

app.get('/',(req, res)=>{
  res.send({date: new Date()});
});

exports.app = functions.https.onRequest(app);


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
