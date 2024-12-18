
---

# **URL Shortener API**

This project provides a simple URL shortening service. Users can shorten URLs, retrieve the original URLs using the shortened IDs, and view usage statistics.

---

## **Features**
- **Shorten URLs**: Accepts a long URL and generates a unique, short URL.
- **Redirection**: Redirects users to the original URL using the shortened ID.
- **Usage Statistics**: Tracks the number of times a short URL is accessed and the last access timestamp.
- **Error Handling**: Handles invalid inputs and server/database errors gracefully.
- **Rate Limiting**: (Optional) Limits the number of requests per minute.

---

## **Tech Stack**
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Other Tools**: Shortid (for generating unique IDs)

---

## **Setup Instructions**

### **1. Clone the Repository**
```bash
git clone https://github.com/mdmonauwarulislam/url-shortener.git
cd url-shortener
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Configure Environment Variables**
Create a `.env` file in the root directory with the following:
```env
PORT=5000
MONGO_URI= "mongodb://<username>:<password>@<cluster>/<database>"
```

### **4. Start the Server**
To run the application:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

---

## **API Documentation**

### **1. POST /shorten**
**Description**: Shortens a given URL.  
**Request**:
- **Headers**:  
  ```json
  {
    "Content-Type": "application/json"
  }
  ```
- **Body**:
  ```json
  {
    "originalUrl": "https://learn.knowledgegate.in/learn/account/signin"
  }
  ```
**Response**:
- **201 Created**:
  ```json
  {
     "shortUrl": "http://url-shortener2-nu.vercel.app/X6sJ1970F"
  }
  ```

---

### **2. GET /:shortId**
**Description**: Redirects to the original URL using the `shortId`.  
**Request**: None  
**Response**:
- Redirects the user to the original URL.

---

### **3. GET /stats/:shortId**
**Description**: Retrieves usage statistics for a specific short URL.  
**Response**:
```json
{
    "originalUrl": "https://learn.knowledgegate.in/learn/account/signin",
    "clicks": 2,
    "lastAccessed": "2024-11-26T13:49:51.699Z"
}
```

---

## **Database Schema**

The application uses a single MongoDB collection: **urls**.  
**Document Structure**:
```json
{
    "_id":"6745d1a69a73659b4e066353",
    "originalUrl":"https://learn.knowledgegate.in/learn/account/signin",
    "shortId":"_ZbU898G0",
    "clicks":"2",
    "createdAt":"2024-11-26T13:11:29.873Z",
    "updatedAt":"2024-11-26T13:13:38.660Z",
    "__v":"0",
    "lastAccessed": "2024-11-26T13:13:38.660Z"
  
}

```

---

## **Deployment**

To deploy the application:
1. Choose a platform like Render, Railway, or Vercel.
2. Set up the environment variables on the platform.
3. Deploy the project following the platform's documentation.

**Deployed URL**: https://url-shortener2-nu.vercel.app/

---

## **Rate Limiting**
The API uses `express-rate-limit` to limit the number of requests per minute:
- **Limit**: 100 requests per minute.

---

## **Bonus Features**

- **Unit Tests**: Basic unit tests can be written for each endpoint.

---

## **Future Improvements**
- Add user authentication for managing URLs.
- Introduce custom aliases for short URLs.
- Implement analytics dashboards for users.

---

## **Author**
**Md Monauwarul Islam**  
- [GitHub](https://github.com/mdmonauwarulislam)  
- [LinkedIn](https://www.linkedin.com/in/mdmonauwarulislam)  

---

