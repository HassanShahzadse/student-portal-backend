# Student Portal Backend Readme

This is a Node.js and Express backend for a student portal that allows users to perform CRUD (Create, Read, Update, Delete) operations on student data. The backend uses MongoDB to store the student data and provides endpoints for performing the CRUD operations.

## Features
- Create new students
- Read student data
- Update student data
- Delete students

## Installation
1. Clone the repository
```
git clone https://github.com/HassanShahzadse/student-portal-backend.git
```

2. Install dependencies
```
npm install
```

3. Start the server
```
npm start
```

## Usage
1. Create a new student by sending a `POST` request to `/students` with the student data in the request body.
2. Read student data by sending a `GET` request to `/students/:id` where `:id` is the ID of the student you want to view.
3. Update student data by sending a `PUT` request to `/students/:id` where `:id` is the ID of the student you want to update and the updated student data in the request body.
4. Delete a student by sending a `DELETE` request to `/students/:id` where `:id` is the ID of the student you want to delete.

## Contributing
Contributions are welcome! Please feel free to submit a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.

## Credits
This backend was created by Hassan Shahzad using Node.js, Express, and Postgres.
