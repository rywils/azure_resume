# azure_resume

Resume hosted on Azure

## Initial

- Frontend folder contains the frontend
- main.js contains visitor counter code.

## Building the backend

- First, we begin by creating a resource group which we will put everything related to this project inside.

- We then have to create a Cosmos DB Account, and assign it to our resource group.

- After we create a database, we can create a container called Counter (This will be used to store this page view) and set it to the following:

```json
"id": "1",
"count": 0,
```

### Interacting with our Cosmos DB 

Microsoft Docs: https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2?tabs=in-process%2Cfunctionsv2&pivots=programming-language-csharp

- Ensure Azure Functions extension is installed on VSCode, and create a local function using C# and using an HTTP Trigger.
- Once the function is created, move the generated files into a /backend/api folder.
- Install the nuget package
```
dotnet add package Microsoft.Azure.WebJobs.Extensions.CosmosDB --version 3.0.10
```

- Obtain the ConnectionString from Cosmos DB (dbname -> keys -> PRIMARY CONNECTION STRING), copy and paste that value in local.settings.json and name it

```
"AzureResumeConnectionString":""
```

- Write the C# code to interact with the DB container and obtain/update the counter


