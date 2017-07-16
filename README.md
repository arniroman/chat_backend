## Usage
 1. npm install
 2. node server.js
 3. in console  run mongod
 3. open in localhost:8000
 
## API description


###  methods (CRUD) 

#### 1. Create
**POST /api/users HTTP 1.1** -  create new user in database, add to *users* collection


`body`    
 ```json
 {
    "name": "Ivan",
    "phone": "077-77-72",
    "status": "bandit",
    "_id": "596bcded0df337185426e95d"
 }
```   
response: created user object
 
 ___
 
#### 2. Read 
**GET /api/users HTTP 1.1** - show all users in database

response :
  ```json
 
{      
        "_id": "596bcded0df337185426e95d",
        "name": "Ivan",
        "phone": "077-77-72",
        "status": "bandit"
 }
 ...

___

#### 3. Update 
**PUT /api/users/{user_id}** HTTP 1.1 - update user by id 

body 
```json
{
    "_id": "596bcded0df337185426e95d",
      "name": "Vasa",
      "phone": "077-77-72",
      "status": "bandit"
}
```
response : send status 200 (OK) 

___

#### Delete 
**DELETE /api/users/{user_id}** HTTP 1.1 - remove user by id from users collection

respone: send status 200 (OK)

___

 ### methods (CRUD) for Message 
 
 #### 1. Create 
 **POST api/messages** HTTP 1.1 - create new message entity in *messages* collection
 
 body:
 ```json
{
    "sendeId": 4,
    "receiveId": 1,
    "body__message": "hi",
    "_id": "596bcf750df337185426e960"
}
```

response : created message entity
 
 ___
 
 #### 2. Read 
 **GET /api/messages HTTP 1.1** - show all messages from  collection *messages*
 
 response :
   ```json
{
     "_id": "596bcf750df337185426e960",
      "sendeId": 4,
      "receiveId": 1,
      "body__message": "hi"
}
  ...
  
  ___

#### 3. Update
**PUT /api/messages/{message_id}**  HTTP 1.1  - update message entity 

body 
```json
{
"sendeId": 4,
"receiveId": 1,
"text":"Hello,",
"message_id":2
}
```
response : send status 200 (OK)

___

#### 4. Delete 
**DELETE /api/messages/{message_id}**  HTTP 1.1 - remove message entity by specified id from collection *messages*

response : send status 200 (OK)

___

#### Additional rout
**GET /api/messages/private/{senderId} HTTP 1.1** - route, which returns all users with whom the user with specified id has spoken.

