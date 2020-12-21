#Importing contacts

This application shows how to use the import functionality, the [online example](https://api.checkmarket.com/Examples/Example/18) is also based on this code.

##New import configuration

An import configuration is required when importing contacts. The import configuration is used to declare how your contacts should be processed: input requirements, target contactgroup and survey... In this example we only show the most used properties. Check out the [full description](https://api.checkmarket.com/docs/api/v3/action/POST-3-contacts-import-configs).

##Importing contacts

Since the import of a few thousand new contacts can take some time, we handle them asynchronous. Once a new import has been started we will return a queue item id. 

This queue item id can be used to follow up the process and get the import results once completed.

##Validate results

At this moment, we print the status codes with the number of contacts. Based on these status codes, you can create a general overview of how many contacts were created or failed. 
Individual results can be parsed from the result (csv or xlsx file) which we created.
