# Internship-2: CSV & PostgreSQL API

A Node.js Express API for managing CSV file operations with PostgreSQL database integration. This application provides CRUD operations for CSV files and enables seamless data import to PostgreSQL.

## Features

- ✅ **CSV File Operations**: Read, create, update, and delete CSV files
- ✅ **PostgreSQL Integration**: Import CSV data directly into PostgreSQL database
- ✅ **RESTful API**: Clean and intuitive REST endpoints
- ✅ **Error Handling**: Comprehensive error handling middleware
- ✅ **User Management**: Complete user CRUD operations

## Technologies Used

- **Node.js**: Runtime environment
- **Express.js**: Web application framework
- **PostgreSQL**: Relational database
- **CSV Parser**: For handling CSV file operations

## Project Structure

```
Internship-2/
├── main.js              # Application entry point
├── database.js          # PostgreSQL connection configuration
├── userController.js    # User route controllers
├── userModel.js         # User database model
├── errorHandler.js      # Global error handling middleware
├── createUserTable.js   # Database table initialization
├── data.sql             # SQL scripts
├── package.json         # Dependencies and scripts
└── .gitignore          # Git ignore file
```

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Thesageof69/Internship-2.git
   cd Internship-2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure PostgreSQL**
   - Create a PostgreSQL database
   - Update database credentials in `database.js`

4. **Initialize database tables**
   ```bash
   node createUserTable.js
   ```

5. **Start the server**
   ```bash
   npm start
   ```

## API Endpoints

### User Operations

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### CSV Operations

- `POST /api/csv/import` - Import CSV data to database
- `GET /api/csv/export` - Export database data to CSV
- `POST /api/csv/upload` - Upload and parse CSV file

## Usage Example

```javascript
// Create a new user
fetch('http://localhost:3000/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com'
  })
});
```

## Database Configuration

Update the following in `database.js`:

```javascript
const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'your_database',
  user: 'your_username',
  password: 'your_password'
});
```

## Contributing

Feel free to submit issues and enhancement requests!

## Author

**Rayal** - [Thesageof69](https://github.com/Thesageof69)

## License

This project is open source and available for educational purposes.
