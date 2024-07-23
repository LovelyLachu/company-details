Backend Task Details:

1. Create a new Node.js application.
2. Create a new MongoDB database.
3. Create a company info collection in it.
4. Create POST API to save data in the collection.
   a. Use Joi validation to validate request params.
   b. Save uploaded image in base64 format in database
5. Create a GET API to retrieve all company information from the company info collection using aggregation framework
   a. Add pagination
   b. Add sorting
   c. Add Search Filtering using the fields(company name, country, product name).
6. Set up error handling and logging mechanism
7. Add cors, helmet, morgan libraries for security measures
8. Add swagger Documentation for both the API's
