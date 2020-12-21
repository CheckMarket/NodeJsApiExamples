# CheckMarket Api examples in Node.js
Quickly connect your Node.js application with the [CheckMarket Survey API](https://api.checkmarket.com) using our [Swagger documentation](https://api-eu.checkmarket.com/Docs/Swagger) and [Swagger-js](https://github.com/swagger-api/swagger-js).

##Prerequisites
1. A free CheckMarket account. [Sign up](https://www.checkmarket.com/sign-up/) if you don't have one yet.
2. API keys, you can [create them](https://api-eu.checkmarket.com/Account/Keys) in your CheckMarket account. Your key needs the role *Contacts (Write)*.
3. Environment in which you are able to run this Node.js application


##Authentication
Rename the auth.json file to authentication.json file in the root of your application and enter [your api keys](https://api.checkmarket.com/Account/Keys) to authenticate your requests. 

```
{
  "MasterKey": "YourMasterKey",
  "Key": "YourKey"
}
```

##Import contacts 

[Check out](./Import/README.md) our first example to import contacts into your survey.

