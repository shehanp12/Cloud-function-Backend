import * as functions from 'firebase-functions';
const express = require('express');


const app = express();
import * as cors from 'cors';
app.use(cors());


export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});


const boardingHouse = require("./controllers/boardingController");
app.use('/boardingHouse', boardingHouse);
exports.api = functions.https.onRequest(app);
