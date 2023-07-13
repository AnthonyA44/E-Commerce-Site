# E Commerce Site API Documentation

## Create

### Request: "POST /api/users/register"
-  content-type: "application/json"
-  body: object
    - username: (string)
    - email: (string)
    - password: (string)
- Response: 200
    - content-type: "application/json"
    - body: (string) "OK"
- Response: 501
    - content-type: "text/html"
    - body: (string) Error message of whatever error occured

### Request: "POST /api/auth/login"
- Content-type: "application/json"
- Body: object
  - username: (string)
  - password: (string)
- Response: 200
    - content-type:"application/json"
    - body: (string) "OK"
- Response: 501
    - content-type: "text/html"
    - body: (string) Error message of whatever error occured

## Read

### Request: "GET /api/products/get"
- Response: 200
    - content-type: "application/json"
    - body: (product object)
- Response: 501
  - content-type: "text/html"
  - body: (string) Error message of whatever error occured
    
### Inprogress, not all apis are listed
