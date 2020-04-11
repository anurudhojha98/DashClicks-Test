var express = require('express');
const adsSdk = require('facebook-nodejs-business-sdk');

var bodyParser = require("body-parser");
var cors = require('cors')
var app = express();

var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const config = require('./config/config');

const accessToken = config.ACCESS_TOKEN;
const api = adsSdk.FacebookAdsApi.init(accessToken);

exports.AdAccount = AdAccount = adsSdk.AdAccount;
exports.Campaign = adsSdk.Campaign;
exports.account = new AdAccount(config.AD_ACCOUNT_ID);

//Main crud logic is written in Campaign Service
require('./routes/CampaignRoutes')(app, router);


app.listen(3000, () => {
    console.log("Server started at port 3000.")
})