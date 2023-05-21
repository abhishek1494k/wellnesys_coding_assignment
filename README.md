# Node.js Express Application Development

This is a simple web application built using Node.js and the Express framework. It provides a basic server that listens on a specified port and implements three different routes. The application allows users to retrieve a welcome message, save user information via a POST request, and retrieve user information via a GET request.

## Installation

1. Clone the repository or download the source code.
2. Install Node.js on your system if not already installed.
3. Open a terminal or command prompt and navigate to the project directory.
4. Run the following command to install the project dependencies:

```shell
npm install
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
       "name": "ajit",
       "email": "ajit@gmail.com",
       "gender": "male",
       "password": "12345"
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
           "name": "Ajit",
           "email": "ajit@gmail.com",
           "phone":"1231123"
         }
     ]
     ```

## Error Handling

The application handles the following error scenarios:

- **Invalid routes:** If an invalid route is accessed, the server responds with a "Not Found" error (HTTP status code 404).
- **Server errors:** If there is an internal server error, such as a file read/write error, the server responds with an "Internal Server Error" (HTTP status code 500).

## Steps Followed

To complete the assignment, the following steps were followed:

1. Installed Node.js: Ensure that Node.js is installed on your system. Node.js allows running JavaScript on the server-side.
2. Initialized a new Node.js project: Create a new directory for the project and run the `npm init -y` command to initialize a new Node.js project. This generates a `package.json` file to manage project dependencies.
3. Installed Express: Install the Express framework by running the `npm install express` command in the project directory. Express is a popular framework for building web applications in Node.js.
4. Set up the basic server: Create a new JavaScript file (e.g., `server.js`) and import the Express module using CommonJS. Define a constant `app` as the result of calling the `express()` function, which creates an instance of the Express application.
5. Defined routes: Implement the three routes mentioned in the assignment using the `app.get()` and `app.post()` methods provided by Express. These methods take a URL pattern and a callback function to handle the request and send a response. Segregate the user route to another folder and use it inside the `server.js` file.
6. Implemented middleware: Write the middlewares in a

different folder and use the `app.use()` method to define middleware functions. Middleware functions are executed before the route handlers and can perform tasks such as logging and error handling. Create middleware functions to log incoming requests and handle errors. 7. Handled file operations: To save and retrieve user information from a JSON file, use the `fs` module provided by Node.js. Use the `fs.readFile()` method to read the file contents and the `fs.writeFile()` method to save updated data back to the file. 8. Started the server: Call the `app.listen()` method to start the server and make it listen on the specified port.

## Challenges Faced

During the development process, the following challenges were encountered:

- **Debugging:** Various errors such as typos, missing dependencies, or incorrect file paths were encountered. It required carefully reviewing the code, using `console.log` statements, and consulting the Express and Node.js documentation to identify and resolve these issues.
- **Handling asynchronous operations:** Reading and writing files are asynchronous operations. To ensure the correct execution order, callbacks or promises were used to handle the asynchronous nature of these operations.
- **Error middleware:** There were some errors while implementing the Error Middleware. Careful review of the code and usage of `console.log` statements were necessary to overcome these errors.

## Lessons Learned

The development of this project provided the following key lessons:

- **Simplified web application development with Express:** Express simplifies web application development by providing a straightforward way to define routes, handle requests, and manage middleware. It abstracts away many complexities, allowing developers to focus on the core functionality of the application. It is much easier to implement the server compared to the conventional HTTP methods.
- **Enhancing functionality with middleware:** Middleware functions provide a flexible way to add common functionality to the application, such as logging and error handling. They can be chained together and executed in a specific order, enhancing the overall functionality and maintainability of the application.
- **Careful handling of file operations:** When working with file operations, it's important to handle errors gracefully and consider potential race conditions. Proper error handling and understanding of asynchronous programming are crucial for ensuring data integrity and a smooth user experience.
- **Thorough testing and error handling:** In a real-world scenario, it's important to thoroughly test the application and handle various error conditions, such as invalid routes, file read/write errors, and server errors. Robust error handling improves the stability and reliability of the application.

By following these steps and overcoming the challenges, a basic Node.js Express application was successfully developed, providing a foundation for further learning and exploration in web application development.
