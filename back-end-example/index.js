var express = require('express');
var router = express.Router();

const readline = require('readline');
const {google} = require('googleapis');

const fs = require('fs');

var verifiedTokens = []
var timestamps = []

let pass = ""
let tokenInterval = 1 //Minutes
let tokenExpiration = 20 //Minutes

setTimeout(checkTokens, tokenInterval * 60000);

function checkTokens(){
  var i = 0
  while (i < timestamps.length){
    timestamps[i] += tokenInterval
    if (timestamps[i] > tokenExpiration){
      timestamps.splice(i, 1)
      verifiedTokens.splice(i, 1)
    }else {
      i ++
    }
  }
  setTimeout(checkTokens, tokenInterval * 60000);
}

function verifyToken(token){
  return verifiedTokens.includes(token)
  
}

function genToken(req){
  if (req.query.pass == pass){
    token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    let time = new Date()
    verifiedTokens.push(token)
    timestamps.push(0)
    return {"pass_accepted": true, "token": token, "message": "This is for you... Enjoy it!"}
  }
  return {"pass_accepted": false, "token": null, "message": "That's the wrong passwrod binch >:("}
}
 
async function jobHandler(req) {
  if (verifyToken(req.query.token)){
    data = await new Promise(function (resolve) {jobData(public_auth, resolve)})
    return {"token_accepted": true, "data": JSON.stringify(data)}
  }
  return {"token_accepted": false, "data": "sorry king your token expired. Keep your head up tho"}
}

async function reviewHandler(req) {
  if (verifyToken(req.query.token)){
    data = await new Promise(function (resolve) {reviewData(public_auth, resolve)})
    return {"token_accepted": true, "data": JSON.stringify(data)}
  }
  return {"token_accepted": false, "data": "sorry king your token expired. Keep your head up tho"}
}

async function resumeHandler(req) {
  if (verifyToken(req.query.token)){
    data = await new Promise(function (resolve) {resumeData(public_auth, resolve)})
    return {"token_accepted": true, "data": JSON.stringify(data)}
  }
  return {"token_accepted": false, "data": "sorry king your token expired. Keep your head up tho"}
}

function asyncWrapper(fn) {
    return (req, res, next) => {
      return Promise.resolve(fn(req))
        .then((result) => res.send(result))
        .catch((err) => next(err))
    }
  }

router.get('/jobs', asyncWrapper(jobHandler));

router.get('/reviews', asyncWrapper(reviewHandler));

router.get('/resumes', asyncWrapper(resumeHandler));

router.get('/gen-token', asyncWrapper(genToken))

public_auth = null;



// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';

// Load client secrets from a local file.
fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Sheets API.
  authorize(JSON.parse(content));
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client);
    oAuth2Client.setCredentials(JSON.parse(token));
    public_auth = oAuth2Client;
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error while trying to retrieve access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
    });
  });
}

//Link: https://docs.google.com/spreadsheets/d/1Pi2WI5tXAR76LEywEp9eJy-fpW3CpXhKZoFsFAvCI5Y/edit#gid=20786601
function reviewData(auth, resolve) {
  const sheets = google.sheets({version: 'v4', auth});
  sheets.spreadsheets.values.get({
    spreadsheetId: '1Pi2WI5tXAR76LEywEp9eJy-fpW3CpXhKZoFsFAvCI5Y',
    range: 'Form Responses 1!A2:AB',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
        data = []
      rows.map((row) => {
        data.push({"timestamp": row[0],
                  "first_name": row[1], 
                  "last_name": row[2], 
                  "contact": row[3],
                  "company_title": row[4],
                  "company_type" : row[5],
                  "position_title": row[6],
                  "share_internship_optional": row[7],
                  "type_interview": row[8],
                  "questions": row[9],
                  "prep": row[10],
                  "difficulty_level": row[11],
                  "difficulty_explanation": row[12],
                  "enjoyable_level": row[13],
                  "enjoyable_explanation": row[14],
                  "result": row[15],
                  "time": row[16],
                  "additional": row[17],
                  "share_work_optional": row[18],
                  "start": row[19],
                  "end": row[20],
                  "hours_per_week": row[21],
                  "tasks": row[22],
                  "recomend_rating": row[23],
                  "enjoyable_rating": row[24],
                  "favorite": row[25],
                  "least_favorite": row[26],
                  "compensation": row[27],
                  "form": "https://docs.google.com/forms/d/e/1FAIpQLSf79vOfzZbmRTngJkpxS7fmZa7IQpJ-0SH3VUFz5PklxLbWeg/viewform?usp=sf_link"})
      });
      resolve(data)
    } else {
      resolve(null)
    }
  });
}

//Link: https://docs.google.com/spreadsheets/d/11Cyoj9EEll2cFAlJGVtOg2jpQ0sPpEG50dVq2NcdAAY/edit#gid=1599085219
function jobData(auth, resolve) {
  const sheets = google.sheets({version: 'v4', auth});
  sheets.spreadsheets.values.get({
    spreadsheetId: '11Cyoj9EEll2cFAlJGVtOg2jpQ0sPpEG50dVq2NcdAAY',
    range: 'Form Responses 1!A2:N',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
        data = []
      rows.map((row) => {
        data.push({"timestamp": row[0],
                  "first_name": row[1], 
                  "last_name": row[2], 
                  "contact": row[3],
                  "company_title": row[4],
                  "company_type" : row[5],
                  "position_title": row[6],
                  "job_description": row[7],
                  "deadline": row[8],
                  "contact_recruiter": row[9],
                  "referral_optional": row[10],
                  "link": row[11],
                  "notes": row[12],
                  "conditions": row[13],
                  "location": row[14], 
                  "form" : "https://docs.google.com/forms/d/e/1FAIpQLSdbHl2WvYY2MBBU-INOpRy_id5HXWccD08sCByYuNWrdFXCcg/viewform?usp=sf_link"})
      });
      resolve(data)
    } else {
      resolve(null)
    }
  });
}

//Link: https://docs.google.com/spreadsheets/d/1MrqoaamBKxfXm_-7eBjY5ppSgp57cUWjWyOdbj3Jyp4/edit?ts=5f9f43ee#gid=1883513319
function resumeData(auth, resolve) {
  const sheets = google.sheets({version: 'v4', auth});
  sheets.spreadsheets.values.get({
    spreadsheetId: '1MrqoaamBKxfXm_-7eBjY5ppSgp57cUWjWyOdbj3Jyp4',
    range: 'Form Responses 1!A2:I',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
        data = []
      rows.map((row) => {
        data.push({"timestamp": row[0],
                  "email": row[1], 
                  "first_name": row[2], 
                  "last_name": row[3],
                  "contact": row[4],
                  "resume" : row[5],
                  "track": row[6],
                  "positions": row[7],
                  "notes": row[8]})
      });
      resolve(data)
    } else {
      resolve(null)
    }
  });
}


module.exports = router;
