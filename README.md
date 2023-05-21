#  Node.js Express Application Development (Wellnesys)

This is a simple web application built using Node.js and the Express framework. It provides a basic server that listens on a specified port and implements three different routes. The application allows users to retrieve a welcome message, save user information via a POST request, and retrieve user information via a GET request.

## Installation

1. Clone the repository or download the source code.
2. There is no root folder/repo.
3. Open a terminal or command prompt and navigate to the project directory named wellnesys_coding_assignment.
4. Run the following command to install the project dependencies:

```shell
npm install
```
5. Once dependencies are installed, start the server in root directory
```shell
npx nodemon gserver.js
```

## Routes

The application implements the following routes:

1. **Route 1: Welcome Message**

   - URL: '/'
   - Method: GET
   - Description: Retrieves a welcome message.
   - Example Response: "Welcome to Wellnesys Home Route!!!"

2. **Route 2: Save User Information**

   - URL: '/users'
   - Method: POST
   - Description: Saves user information to a JSON file.
   - Request Payload: JSON object with user information.
   - Example Request:

     ```http
     POST /users
     Content-Type: application/json

     {
       "name": "aabhishek",
       "email": "abhi@gmail.com",
       "phone": "7011943899"
     }
     ```

3. **Route 3: Retrieve User Information**

   - URL: '/users'
   - Method: GET
   - Description: Retrieves user information from the JSON file.
   - Example Response:
     ```json
     [
         {
       "name": "aabhishek",
       "email": "abhi@gmail.com",
       "phone": "7011943899"
         }
     ]
     ```

## Error Handling

The application handles the following error scenarios:

- **Invalid routes:** If an invalid route is accessed, the server responds with a "Not Found" error (HTTP status code 404).
- **Server errors:** If there is an internal server error, such as a file read/write error, the server responds with an "Internal Server Error" (HTTP status code 500).

## Logger MW

- The application logs all details of every request made to the server in a file "logger.txt"

## Steps Followed

To complete the assignment, the following steps were followed:

1. Initialized a new Node.js project: Create a new directory for the project and run the `npm init -y` command to initialize a new Node.js project. This generates a `package.json` file to manage project dependencies.
3. Installed Express: Install the Express framework by running the `npm install express` command in the project directory. Express is a popular framework for building web applications in Node.js.
4. Set up the basic server: Create a new JavaScript file (e.g., `gserver.js`) and import the Express module using CommonJS. Define a constant `app` as the result of calling the `express()` function, which creates an instance of the Express application.
5. Defined routes: Implement the three routes mentioned in the assignment using the `app.get()` and `app.post()` methods provided by Express. These methods take a URL pattern and a callback function to handle the request and send a response. Segregate the user route to another folder and use it inside the `gserver.js` file.
6. Controller : Connect the routes to the controller using the functions and import the functions in the routes using CJS methods.
7. Implemented middleware: Write the middlewares in a different folder and use the `app.use()` method to define middleware functions. Middleware functions are executed before the route handlers and can perform tasks such as logging and error handling. Create middleware functions to log incoming requests and handle errors. 
8. Handled file operations: To save and retrieve user information from a JSON file, use the `fs` module provided by Node.js. Use the `fs.readFile()` method to read the file contents and the `fs.writeFile()` method to save updated data back to the file.
9. Started the server: Call the `app.listen()` method to start the server and make it listen on the specified port.
10. To save the logs of every request, using the `fs.appendFile()` method
11. Using comments to specify various codes so that code is readable.

## Challenges Faced

During the development process, the following challenges were encountered:

- **Debugging:** Various errors such as typos, missing dependencies, or incorrect file paths were encountered. It required carefully reviewing the code, using `console.log` statements, and consulting the Express and Node.js documentation to identify and resolve these issues.
- **Data Base Connection:** There were issue regarding specifying the exact path of config/db.json. 
- **Fetching and storing Data in db.json:**

## Lessons Learned

The development of this project provided the following key lessons:

- **Creating Documentation:** First time I have prepaired the documentations of a assignment which has no frontend.
- **Simplified web application development with Express:** Express simplifies web application development by providing a straightforward way to define routes, handle requests, and manage middleware. It abstracts away many complexities, allowing developers to focus on the core functionality of the application. It is much easier to implement the server compared to the conventional HTTP methods.
- **Enhancing functionality with middleware:** Middleware functions provide a flexible way to add common functionality to the application, such as logging and error handling. They can be chained together and executed in a specific order, enhancing the overall functionality and maintainability of the application. Also, first time I have created error handling and invalid routes handling middlewares
- **Careful handling of file operations:** When working with file operations, it's important to handle errors gracefully and consider potential race conditions. Proper error handling and understanding of asynchronous programming are crucial for ensuring data integrity and a smooth user experience.
