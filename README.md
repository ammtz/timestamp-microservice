# **Timestamp Microservice**

A simple Node.js and Express application that provides a timestamp API. The microservice can handle various date inputs and return both **Unix** and **UTC** timestamp formats.

## **Features**
- Accepts both Unix timestamps and ISO 8601 date strings as input.
- Handles invalid dates gracefully, returning a JSON error response.
- Returns the current date and time if no input is provided.
- Supports cross-origin resource sharing (CORS).

---

## **API Endpoints**

### **Root Endpoint**
```http
GET /
```
- **Description**: Serves the landing page with information about the service.
- **Response**: HTML content.

---

### **Timestamp API**
```http
GET /api/:date?
```
- **Description**: Returns a JSON object with Unix and UTC timestamps based on the input date.
- **Parameters**:
  - `date` (optional): Can be:
    - An ISO 8601 date string (e.g., `2023-01-01`).
    - A Unix timestamp (e.g., `1451001600000`).
    - Empty (returns the current timestamp).
- **Responses**:
  - **Valid Date Input**:
    ```json
    {
      "unix": 1672531200000,
      "utc": "Sun, 01 Jan 2023 00:00:00 GMT"
    }
    ```
  - **Invalid Date Input**:
    ```json
    {
      "error": "Invalid Date"
    }
    ```

---

## **Examples**

### 1. **No Input**
**Request**:
```http
GET /api/
```
**Response**:
```json
{
  "unix": 1673907600000,
  "utc": "2023-01-16T12:00:00.000Z"
}
```

### 2. **Valid Unix Timestamp**
**Request**:
```http
GET /api/1451001600000
```
**Response**:
```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```

### 3. **Valid Date String**
**Request**:
```http
GET /api/2023-01-01
```
**Response**:
```json
{
  "unix": 1672531200000,
  "utc": "Sun, 01 Jan 2023 00:00:00 GMT"
}
```

### 4. **Invalid Input**
**Request**:
```http
GET /api/invalid-date
```
**Response**:
```json
{
  "error": "Invalid Date"
}
```

---

## **Setup and Usage**

### **1. Clone the Repository**
```bash
git clone <repository_url>
cd <repository_directory>
```

### **2. Install Dependencies**
Ensure you have [Node.js](https://nodejs.org/) installed, then run:
```bash
npm install
```

### **3. Run the Application**
Start the server:
```bash
npm start
```
The server will be available at:
```
http://localhost:3000
```

### **4. Deploy the Application**
You can deploy this app to services like:
- [Heroku](https://www.heroku.com/)
- [Render](https://render.com/)
- [Replit](https://replit.com/)

---

## **Technologies Used**
- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for building the API.
- **Day.js**: Lightweight library for date parsing and formatting.
- **CORS**: Middleware to enable cross-origin resource sharing.

---

## **Project Requirements**
This app meets the following requirements:
1. Handles Unix timestamps and ISO 8601 date strings.
2. Returns JSON responses with both `unix` and `utc` formats.
3. Provides an error message for invalid dates.
4. Defaults to the current date and time if no input is provided.

---

## **License**
This project is open-source and available under the [MIT License](LICENSE).
