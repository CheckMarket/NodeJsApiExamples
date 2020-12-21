var Swagger = require('swagger-client');
var fs = require('fs');

//Authentication: json file with MasterKey and Key as available https://api.checkmarket.com/Account/Keys
var Auth = require('./authentication.json');

//Variables
var ContactGroupId = 26169;
var SurveyId = 50659;
var ImportConfigId = 423;


var client = new Swagger({
	url: 'https://api-eu.checkmarket.com/docs/api/v3/swagger', 
	authorizations: {
		"MasterKey": new Swagger.ApiKeyAuthorization("X-Master-Key", Auth.MasterKey, "header"),
		"ApiKey": new Swagger.ApiKeyAuthorization("X-Key", Auth.Key, "header")
	},
	success: function () {
		/*client.Contacts.Contacts_AddImportConfig({
			ImportConfig: {
				Name: "My import settings", 
				ContactGroupId: ContactGroupId,
				SurveySettings: {
					SurveyId : SurveyId,
					InvitationDelayInDays: 2,
					ExpirationAfterDays: 14
				},
				EmailMustBeUniqueWithinAccount: true,
				EmailIsRequired: true,
				SendNotificationMail: true,
				IsReusable: true,
				DefaultLanguage: "en"
			}
		}, function (response) {
			var importConfigResult = JSON.parse(response.data).Data;
			console.log('New import config with ID: ' + importConfigResult.ImportConfigId);
		});*/
		client.Contacts.Contacts_ImportContacts({
			ImportConfigId: ImportConfigId, 
			Contacts: [{
					FirstName : "John",
					LastName : "Doe",
					Email: 'john.doe@mail.com',
					LangCode: 'en'
				},
				{
					FirstName : "Jane",
					LastName : "Doe",
					Email: 'jane.doe@mail.com',
					LangCode: 'en'
				}]
		}, function (result) {
			var importResult = JSON.parse(result.data).Data;
			console.log('Import started (PQ ' + importResult.QueueItemId + ')');
					(function loop() {
				client.Contacts.Contacts_ImportResult({ QueueItemId: importResult.QueueItemId }, function (qResult) {
					var queueResult = JSON.parse(qResult.data).Data;
					if (queueResult.StatusId == 4) {
						console.log('Import completed with results: ');
						for (var i = 0; i < queueResult.Result.ImportResult.length; i++) {
							console.log('Status ' + queueResult.Result.ImportResult[i].ResultCode + ': ' + queueResult.Result.ImportResult[i].ContactCount + ' contacts');
						};
					} else { 
						setTimeout(loop, 2000);
					}
				});
			}())
		});
	}
});