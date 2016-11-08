//twilio generation of token for ip chating
/*require('dotenv').load();
var AccessToken = require("twilio").AccessToken;
var ConversationsGrant = AccessToken.ConversationsGrant;
var token = new AccessToken(
	process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_API_KEY,
    process.env.TWILIO_API_SECRET
);

module.exports = function(userId){
var grant = new ConversationsGrant();
token.identity = userId;
grant.configurationProfileSid = process.env.TWILIO_CONFIGURATION_SID;
token.addGrant(grant);
return token.toJwt();
}*/

//twilio generation of token for video call
require('dotenv').load();
var util = require('util');
var AccessToken = require("twilio").AccessToken;
var VideoGrant = AccessToken.VideoGrant;

module.exports = function(identity){
var token = new AccessToken(
	process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_API_KEY,
    process.env.TWILIO_API_SECRET
)
token.identity = identity;
var grant = new VideoGrant();
grant.configurationProfileSid = process.env.TWILIO_CONFIGURATION_SID;
token.addGrant(grant);
return token.toJwt();
}





    


