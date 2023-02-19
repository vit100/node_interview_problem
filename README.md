# Programming challenge.

This is sample app which supposed to be used as a programming challenge during interview working session. Candidate will work on the tasks with screen sharing on.
## Introduction

Application calculates total population based on data describing each country population.
Data provided as static file (testData.json).

Final application is WebAPI running in docker container.

Current implementation provides unit test stub.

## To do:

- Implement uncompleted unit tests; 
- Provide function implementation to pass unit tests;
- Create web API (your choice of framework, express/nestjs, etc) to expose function as web service; API should read data from static testData.json, accept inbound filter parameters and return result of calculation as JSON;
- Implement logging logic to log each request details into log file;
- Prepare application for publishing (hint: files section of package.json);
- Suggest ways to secure API;
- Containerize application - use docker and multistage build; run application in docker. Make sure application log file persistent. (hint: testData.json should not be included into the container);
