# Project: building shop
###### this collection has Request for \[API\]  
this is \[API\] for website for constructure company

as the super admin can add the role for every employee and depend on this role the user can accss to the url.
# 📁 Collection: User 


## End-point: add new user
add new User (employee)
### Method: POST
>```
>{{base_url}}/api/user/add
>```
### Headers

|Content-Type|Value|
|---|---|
|url|http://localhost:3000|


### Body (**raw**)

```json
{
    "fName":"employee",
    "lName":"name",
    "email":"hr@gmail.com",
    "typeOfUser":"admin",
    "password":"123456"
}
```

### 🔑 Authentication apikey

|Param|value|Type|
|---|---|---|


### Response: 201
```json
{
    "apiStatus": true,
    "data": {
        "fName": "hoor",
        "lName": "awwad",
        "typeOfUser": "admin",
        "email": "hoor@gmail.com",
        "status": false,
        "password": "$2b$10$GnDw7xb2HQ5HUf.YRqjWheW0mJARf4tsVdeBtMcY9Uth8k1OJP6Wi",
        "_id": "63afca998bcefb40340f5138",
        "tokens": [],
        "createdAt": "2022-12-31T05:37:29.992Z",
        "updatedAt": "2022-12-31T05:37:29.992Z",
        "__v": 0
    },
    "message": "mew User added successfully"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: user login
make login and it wil retern the token and user Data which we can use to access to other url
### Method: POST
>```
>{{base_url}}/api/user/login
>```
### Body (**raw**)

```json
{
    "email":"danan@gmail.com",
    "password":"123456"
}
```

### 🔑 Authentication apikey

|Param|value|Type|
|---|---|---|


### Response: 200
```json
{
    "apiStatus": true,
    "data": {
        "user": {
            "_id": "63afce488bcefb40340f5144",
            "fName": "hoor",
            "lName": "awwad",
            "typeOfUser": "super admin",
            "email": "danan@gmail.com",
            "status": false,
            "password": "$2b$10$fYs/MJl5dHSrYzUH9ik/NOKDvqo7jLwaXJz6TDceeZkw4SNcpYIjK",
            "tokens": [
                {
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2FmY2U0ODhiY2VmYjQwMzQwZjUxNDQiLCJpYXQiOjE2NzI0NzA3NTQsImV4cCI6MTY3MjcyOTk1NH0.91WKy0eBYvAQDUuoS8BRuNHTRN1GM9RY_1lbvXRucjw",
                    "_id": "63afe0e2e345a088f1abb7c1"
                }
            ],
            "createdAt": "2022-12-31T05:53:12.071Z",
            "updatedAt": "2022-12-31T05:58:29.550Z",
            "__v": 0
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2FmY2U0ODhiY2VmYjQwMzQwZjUxNDQiLCJpYXQiOjE2NzI0NzA3NTQsImV4cCI6MTY3MjcyOTk1NH0.91WKy0eBYvAQDUuoS8BRuNHTRN1GM9RY_1lbvXRucjw"
    },
    "message": "user added successfully"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: delete User
delete the User

to be able to delete the User you have to have the role for delete the user or to be "super admin" and add the userId to url
### Method: DELETE
>```
>{{base_url}}/api/user/delete/{{user_id}}
>```
### Body (**raw**)

```json

```

### 🔑 Authentication apikey

|Param|value|Type|
|---|---|---|


### Response: 201
```json
{
    "apiStatus": true,
    "data": {
        "_id": "63ad79de147d1153cf46696d",
        "fName": "danah",
        "lName": "awwad",
        "typeOfUser": "super admin",
        "role": "63ad7d39873233600bfa503d",
        "email": "danan@gmail.com",
        "status": false,
        "password": "$2b$10$3Plj7/3Y6A6KMKQXGFui2OcE0lI5F7Mplv0tNtaiNSUkfb2PGR3UK",
        "tokens": [],
        "createdAt": "2022-12-29T11:28:30.129Z",
        "updatedAt": "2022-12-29T11:42:49.654Z",
        "__v": 0
    },
    "message": "User deleted successfully"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: update user
update the user like status or email
### Method: PATCH
>```
>{{url}}/api/user/update/63afce488bcefb40340f5144
>```
### Body (**raw**)

```json
{
    "typeOfUser":"super admin",
    "email":"danan@gmail.com"
}
```

### 🔑 Authentication apikey

|Param|value|Type|
|---|---|---|


### Response: 500
```json
{
    "apiStatus": false,
    "data": {},
    "message": "this user not available to update"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: update user status
### Method: PATCH
>```
>http://localhost:3000/api/user/update/status/63afce488bcefb40340f5144
>```
### Body (**raw**)

```json
{
    "status":"false"
}
```

### 🔑 Authentication apikey

|Param|value|Type|
|---|---|---|


### Response: 201
```json
{
    "apiStatus": true,
    "data": {
        "_id": "63afce488bcefb40340f5144",
        "fName": "hoor",
        "lName": "awwad",
        "typeOfUser": "admin",
        "email": "danan@gmail.com",
        "status": false,
        "password": "$2b$10$fYs/MJl5dHSrYzUH9ik/NOKDvqo7jLwaXJz6TDceeZkw4SNcpYIjK",
        "tokens": [],
        "createdAt": "2022-12-31T05:53:12.071Z",
        "updatedAt": "2022-12-31T05:54:59.202Z",
        "__v": 0
    },
    "message": "User status updated successfully"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Role 


## End-point: add new Role
### Method: POST
>```
>http://localhost:3000/api/role/add/63afca998bcefb40340f5138
>```
### Body (**raw**)

```json
[
    {"u":"/api/role/all", "method":"get"}
    ,{"u":"/api/role/add", "method":"post"}
    ,{"u":"/api/role/update/employeeId", "method":"post","params":["employeeId"],"query":["userId"]},
    {"u":"/api/role/delete/employeeId", "method":"post","params":["employeeId"]}
]

```

### 🔑 Authentication apikey

|Param|value|Type|
|---|---|---|


### Response: 200
```json
{
    "apiStatus": true,
    "data": {
        "urls": [
            {
                "url": {
                    "u": "/api/role/all",
                    "method": "get",
                    "params": [],
                    "query": []
                },
                "_id": "63afd57ce345a088f1abb73a"
            },
            {
                "url": {
                    "u": "/api/role/add",
                    "method": "post",
                    "params": [],
                    "query": []
                },
                "_id": "63afd57ce345a088f1abb73b"
            },
            {
                "url": {
                    "u": "/api/role/update/employeeId",
                    "method": "post",
                    "params": [
                        "employeeId"
                    ],
                    "query": [
                        "userId"
                    ]
                },
                "_id": "63afd57ce345a088f1abb73c"
            },
            {
                "url": {
                    "u": "/api/role/delete/employeeId",
                    "method": "post",
                    "params": [
                        "employeeId"
                    ],
                    "query": []
                },
                "_id": "63afd57ce345a088f1abb73d"
            }
        ],
        "_id": "63afd57ce345a088f1abb739",
        "__v": 0
    },
    "message": "new Role added"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get all roles
### Method: GET
>```
>{{url}}/api/role/all
>```
### Body (**raw**)

```json

```

### 🔑 Authentication apikey

|Param|value|Type|
|---|---|---|


### Response: 200
```json
{
    "apiStatus": true,
    "data": [
        {
            "_id": "63aeb1a5609ecc90fc9564ab",
            "urls": [
                {
                    "url": {
                        "u": "/api/role/all",
                        "method": "get",
                        "params": [],
                        "query": []
                    },
                    "_id": "63aeb1a5609ecc90fc9564ac"
                },
                {
                    "url": {
                        "u": "/api/role/add",
                        "method": "post",
                        "params": [],
                        "query": []
                    },
                    "_id": "63aeb1a5609ecc90fc9564ad"
                },
                {
                    "url": {
                        "u": "/api/role/update/roleId",
                        "method": "post",
                        "params": [
                            "roleId"
                        ],
                        "query": [
                            "userId"
                        ]
                    },
                    "_id": "63aeb1a5609ecc90fc9564ae"
                },
                {
                    "url": {
                        "u": "/api/role/delete/roleId",
                        "method": "post",
                        "params": [
                            "roleId"
                        ],
                        "query": []
                    },
                    "_id": "63aeb1a5609ecc90fc9564af"
                }
            ],
            "__v": 0
        }
    ],
    "message": "All roles"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get single role
### Method: GET
>```
>http://localhost:3000/api/role/single/63afca998bcefb40340f5138
>```
### 🔑 Authentication apikey

|Param|value|Type|
|---|---|---|


### Response: 500
```json
{
    "apiStatus": false,
    "data": {},
    "message": "this employee doesn't have role"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: update role
### Method: PUT
>```
>http://localhost:3000/api/role/update/63afca998bcefb40340f5138
>```
### Body (**raw**)

```json

 [
         {"u":"/api/role/all", "method":"delete"}
         ,{"u":"/api/role/add", "method":"get"}
         ,{"u":"/api/role/update/roleId", "method":"get","params":["roleId"]},
         {"u":"/api/role/delete/roleId", "method":"get","params":["roleId"]},
         {"u":"/api/role/delete/userId", "method":"get","params":["userId"]}

     ]

```

### 🔑 Authentication apikey

|Param|value|Type|
|---|---|---|


### Response: 200
```json
{
    "apiStatus": true,
    "data": {
        "_id": "63afd57ce345a088f1abb739",
        "urls": [
            {
                "url": {
                    "u": "/api/role/all",
                    "method": "delete",
                    "params": [],
                    "query": []
                },
                "_id": "63afd617e345a088f1abb74c"
            },
            {
                "url": {
                    "u": "/api/role/add",
                    "method": "get",
                    "params": [],
                    "query": []
                },
                "_id": "63afd617e345a088f1abb74d"
            },
            {
                "url": {
                    "u": "/api/role/update/roleId",
                    "method": "get",
                    "params": [
                        "roleId"
                    ],
                    "query": []
                },
                "_id": "63afd617e345a088f1abb74e"
            },
            {
                "url": {
                    "u": "/api/role/delete/roleId",
                    "method": "get",
                    "params": [
                        "roleId"
                    ],
                    "query": []
                },
                "_id": "63afd617e345a088f1abb74f"
            },
            {
                "url": {
                    "u": "/api/role/delete/userId",
                    "method": "get",
                    "params": [
                        "userId"
                    ],
                    "query": []
                },
                "_id": "63afd617e345a088f1abb750"
            }
        ],
        "__v": 0
    },
    "message": "role updated"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: delete single role
### Method: DELETE
>```
>http://localhost:3000/api/role/delete/63afca998bcefb40340f5138
>```
### 🔑 Authentication apikey

|Param|value|Type|
|---|---|---|


### Response: 200
```json
{
    "apiStatus": true,
    "data": {
        "_id": "63afd57ce345a088f1abb739",
        "urls": [
            {
                "url": {
                    "u": "/api/role/all",
                    "method": "delete",
                    "params": [],
                    "query": []
                },
                "_id": "63afd617e345a088f1abb74c"
            },
            {
                "url": {
                    "u": "/api/role/add",
                    "method": "get",
                    "params": [],
                    "query": []
                },
                "_id": "63afd617e345a088f1abb74d"
            },
            {
                "url": {
                    "u": "/api/role/update/roleId",
                    "method": "get",
                    "params": [
                        "roleId"
                    ],
                    "query": []
                },
                "_id": "63afd617e345a088f1abb74e"
            },
            {
                "url": {
                    "u": "/api/role/delete/roleId",
                    "method": "get",
                    "params": [
                        "roleId"
                    ],
                    "query": []
                },
                "_id": "63afd617e345a088f1abb74f"
            },
            {
                "url": {
                    "u": "/api/role/delete/userId",
                    "method": "get",
                    "params": [
                        "userId"
                    ],
                    "query": []
                },
                "_id": "63afd617e345a088f1abb750"
            }
        ],
        "__v": 0
    },
    "message": "Role deleted"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: show all roles from roles.json file
### Method: GET
>```
>http://localhost:3000/api/role/showroles
>```
### Body (**raw**)

```json

```

### 🔑 Authentication apikey

|Param|value|Type|
|---|---|---|


### Response: 200
```json
{
    "apiStatus": true,
    "data": {
        "roles": [
            {
                "name": "add new user",
                "url": {
                    "u": "/api/user/add",
                    "method": "post",
                    "params": [],
                    "query": []
                }
            },
            {
                "name": "delete user",
                "url": {
                    "u": "/api/user/delete/id",
                    "method": "delete",
                    "params": [
                        "id"
                    ],
                    "query": []
                }
            },
            {
                "name": "update user",
                "url": {
                    "u": "/api/user/update/id",
                    "method": "patch",
                    "params": [
                        "id"
                    ],
                    "query": []
                }
            },
            {
                "name": "update user status",
                "url": {
                    "u": "/api/user/update/status/id",
                    "method": "patch",
                    "params": [
                        "id"
                    ],
                    "query": []
                }
            },
            {
                "name": "update user status",
                "url": {
                    "u": "/api/user/login",
                    "method": "post",
                    "params": [],
                    "query": []
                }
            },
            {
                "name": "add new Role",
                "url": {
                    "u": "/api/role/add/employeeId",
                    "method": "post",
                    "params": [
                        "employeeId"
                    ],
                    "query": []
                }
            },
            {
                "name": "get all roles",
                "url": {
                    "u": "/api/role/all",
                    "method": "get",
                    "params": [],
                    "query": []
                }
            },
            {
                "name": "get single role",
                "url": {
                    "u": "/api/role/single/roleId",
                    "method": "get",
                    "params": [
                        "roleId"
                    ],
                    "query": []
                }
            },
            {
                "name": "update role",
                "url": {
                    "u": "/api/role/update/employeeId",
                    "method": "put",
                    "params": [
                        "employeeId"
                    ],
                    "query": []
                }
            },
            {
                "name": "delete single role",
                "url": {
                    "u": "/api/role/delete/roleId",
                    "method": "delete",
                    "params": [
                        "roleId"
                    ],
                    "query": []
                }
            },
            {
                "name": "delete all roles",
                "url": {
                    "u": "/api/role/delete",
                    "method": "delete",
                    "params": [
                        "roleId"
                    ],
                    "query": []
                }
            },
            {
                "name": "add new project",
                "url": {
                    "u": "/api/project/add",
                    "method": "post",
                    "params": [],
                    "query": []
                }
            },
            {
                "name": "get all projects",
                "url": {
                    "u": "/api/project/all",
                    "method": "get",
                    "params": [],
                    "query": []
                }
            },
            {
                "name": "get single project",
                "url": {
                    "u": "/api/role/single/projectId",
                    "method": "get",
                    "params": [
                        "projectId"
                    ],
                    "query": []
                }
            },
            {
                "name": "update project",
                "url": {
                    "u": "/api/project/update/projectId",
                    "method": "put",
                    "params": [
                        "projectId"
                    ],
                    "query": []
                }
            },
            {
                "name": "delete single project",
                "url": {
                    "u": "/api/project/delete/projectId",
                    "method": "delete",
                    "params": [
                        "projectId"
                    ],
                    "query": []
                }
            },
            {
                "name": "add new building",
                "url": {
                    "u": "/api/building/projectId/add",
                    "method": "post",
                    "params": [
                        "projectId"
                    ],
                    "query": []
                }
            },
            {
                "name": "get all buildings",
                "url": {
                    "u": "/api/building/all",
                    "method": "get",
                    "params": [],
                    "query": []
                }
            },
            {
                "name": "get single building",
                "url": {
                    "u": "/api/building/single/buildingId",
                    "method": "get",
                    "params": [
                        "buildingId"
                    ],
                    "query": []
                }
            },
            {
                "name": "update building",
                "url": {
                    "u": "/api/building/update/buildingId",
                    "method": "put",
                    "params": [
                        "buildingId"
                    ],
                    "query": []
                }
            },
            {
                "name": "delete single building",
                "url": {
                    "u": "/api/building/delete/buildingId",
                    "method": "delete",
                    "params": [
                        "buildingId"
                    ],
                    "query": []
                }
            },
            {
                "name": "get single unit",
                "url": {
                    "u": "/api/building/buildingId/unit/unitAddress",
                    "method": "get",
                    "params": [
                        "buildingId"
                    ],
                    "query": [
                        "unitAddress"
                    ]
                }
            },
            {
                "name": "update single unit",
                "url": {
                    "u": "/api/building/buildingId/unit/unitAddress",
                    "method": "put",
                    "params": [
                        "buildingId"
                    ],
                    "query": [
                        "unitAddress"
                    ]
                }
            },
            {
                "name": "selling a unit",
                "url": {
                    "u": "/api/sell/buildingId/add/unitAddress",
                    "method": "post",
                    "params": [
                        "buildingId"
                    ],
                    "query": [
                        "unitAddress"
                    ]
                }
            },
            {
                "name": "cancel selling a unit",
                "url": {
                    "u": "/api/sell/delete/buildingId/unitAddress",
                    "method": "delete",
                    "params": [
                        "buildingId"
                    ],
                    "query": [
                        "unitAddress"
                    ]
                }
            },
            {
                "name": "pay new invoice",
                "url": {
                    "u": "/api/sell/payment/buildingId/unitAddress",
                    "method": "put",
                    "params": [
                        "buildingId"
                    ],
                    "query": [
                        "unitAddress"
                    ]
                }
            },
            {
                "name": "show payment for a unit",
                "url": {
                    "u": "/api/sell/payment/buildingId/unitAddress",
                    "method": "get",
                    "params": [
                        "buildingId"
                    ],
                    "query": [
                        "unitAddress"
                    ]
                }
            },
            {
                "name": "download invoice for a unit",
                "url": {
                    "u": "/api/sell/download/buildingId/unitAddress",
                    "method": "post",
                    "params": [
                        "buildingId"
                    ],
                    "query": [
                        "unitAddress"
                    ]
                }
            }
        ]
    },
    "message": "show list of roles"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Project 


## End-point: add new project
### Method: POST
>```
>http://localhost:3000/api/project/add
>```
### Body (**raw**)

```json
{
    "projectName":"third project",
    "projectLocation":"Menoufia "
}
```

### 🔑 Authentication apikey

|Param|value|Type|
|---|---|---|


### Response: 200
```json
{
    "apiStatus": true,
    "data": {
        "projectName": "first project",
        "projectLocation": "new cairo",
        "buildingsList": [],
        "_id": "63afd7e5e345a088f1abb768",
        "createdAt": "2022-12-31T06:34:13.462Z",
        "updatedAt": "2022-12-31T06:34:13.462Z",
        "__v": 0
    },
    "message": "new project added"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get all projects
### Method: GET
>```
>http://localhost:3000/api/project/all
>```
### Body (**raw**)

```json

```

### 🔑 Authentication apikey

|Param|value|Type|
|---|---|---|


### Response: 200
```json
{
    "apiStatus": true,
    "data": [
        {
            "_id": "63ad7f9c58a43708b2e4edf8",
            "projectName": "second project",
            "projectLocation": "new cairo",
            "buildingsList": [
                "63ad812d58a43708b2e4ee10",
                "63ad8c079482514d860dd790"
            ],
            "createdAt": "2022-12-29T11:53:00.148Z",
            "updatedAt": "2022-12-29T12:45:59.360Z",
            "__v": 0
        },
        {
            "_id": "63afd7e5e345a088f1abb768",
            "projectName": "first project",
            "projectLocation": "new cairo",
            "buildingsList": [],
            "createdAt": "2022-12-31T06:34:13.462Z",
            "updatedAt": "2022-12-31T06:34:13.462Z",
            "__v": 0
        },
        {
            "_id": "63afd840e345a088f1abb76e",
            "projectName": "third project",
            "projectLocation": "Menoufia",
            "buildingsList": [],
            "createdAt": "2022-12-31T06:35:44.333Z",
            "updatedAt": "2022-12-31T06:35:44.333Z",
            "__v": 0
        }
    ],
    "message": "all projects"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get single project
### Method: GET
>```
>http://localhost:3000/api/project/single/{{projectId}}
>```
### Body (**raw**)

```json

```

### 🔑 Authentication apikey

|Param|value|Type|
|---|---|---|


### Response: 200
```json
{
    "apiStatus": true,
    "data": {
        "_id": "63afd7e5e345a088f1abb768",
        "projectName": "first project",
        "projectLocation": "new cairo",
        "buildingsList": [],
        "createdAt": "2022-12-31T06:34:13.462Z",
        "updatedAt": "2022-12-31T06:34:13.462Z",
        "__v": 0
    },
    "message": "single project"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: update porject
### Method: PUT
>```
>http://localhost:3000/api/project/update/{{projectId}}
>```
### Body (**raw**)

```json
{
    "projectName":"this is first project"
}
```

### 🔑 Authentication apikey

|Param|value|Type|
|---|---|---|


### Response: 200
```json
{
    "apiStatus": true,
    "data": {
        "_id": "63afd7e5e345a088f1abb768",
        "projectName": "this is first project",
        "projectLocation": "new cairo",
        "buildingsList": [],
        "createdAt": "2022-12-31T06:34:13.462Z",
        "updatedAt": "2022-12-31T06:39:09.909Z",
        "__v": 0
    },
    "message": "project updated"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: delete project
### Method: DELETE
>```
>http://localhost:3000/api/project/delete/63afd840e345a088f1abb76e
>```
### Body (**raw**)

```json

```

### 🔑 Authentication apikey

|Param|value|Type|
|---|---|---|


### Response: 200
```json
{
    "apiStatus": true,
    "data": {
        "_id": "63afd840e345a088f1abb76e",
        "projectName": "third project",
        "projectLocation": "Menoufia",
        "buildingsList": [],
        "createdAt": "2022-12-31T06:35:44.333Z",
        "updatedAt": "2022-12-31T06:35:44.333Z",
        "__v": 0
    },
    "message": "project deleted"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Building 


## End-point: add new building
### Method: POST
>```
>http://localhost:3000/api/building/{{projectId}}/add
>```
### Body (**raw**)

```json
{
    "buildingNum":"5B",
    "noFloors":2
}
```

### 🔑 Authentication apikey

|Param|value|Type|
|---|---|---|


### Response: 200
```json
{
    "apiStatus": true,
    "data": {
        "buildingNum": "5B",
        "noFloors": 2,
        "projectId": "63afd7e5e345a088f1abb768",
        "units": [
            {
                "unitName": "a",
                "floorNo": 1,
                "price": 1000,
                "unitAddress": "5B-1-a",
                "payment": "",
                "status": "free",
                "_id": "63afdab5e345a088f1abb77d"
            },
            {
                "unitName": "b",
                "floorNo": 1,
                "price": 1000,
                "unitAddress": "5B-1-b",
                "payment": "",
                "status": "free",
                "_id": "63afdab5e345a088f1abb77e"
            },
            {
                "unitName": "c",
                "floorNo": 1,
                "price": 1000,
                "unitAddress": "5B-1-c",
                "payment": "",
                "status": "free",
                "_id": "63afdab5e345a088f1abb77f"
            },
            {
                "unitName": "d",
                "floorNo": 1,
                "price": 1000,
                "unitAddress": "5B-1-d",
                "payment": "",
                "status": "free",
                "_id": "63afdab5e345a088f1abb780"
            },
            {
                "unitName": "a",
                "floorNo": 2,
                "price": 1000,
                "unitAddress": "5B-2-a",
                "payment": "",
                "status": "free",
                "_id": "63afdab5e345a088f1abb781"
            },
            {
                "unitName": "b",
                "floorNo": 2,
                "price": 1000,
                "unitAddress": "5B-2-b",
                "payment": "",
                "status": "free",
                "_id": "63afdab5e345a088f1abb782"
            },
            {
                "unitName": "c",
                "floorNo": 2,
                "price": 1000,
                "unitAddress": "5B-2-c",
                "payment": "",
                "status": "free",
                "_id": "63afdab5e345a088f1abb783"
            },
            {
                "unitName": "d",
                "floorNo": 2,
                "price": 1000,
                "unitAddress": "5B-2-d",
                "payment": "",
                "status": "free",
                "_id": "63afdab5e345a088f1abb784"
            }
        ],
        "_id": "63afdab5e345a088f1abb77c",
        "createdAt": "2022-12-31T06:46:13.549Z",
        "updatedAt": "2022-12-31T06:46:13.549Z",
        "__v": 0
    },
    "message": "new building added"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get all building
### Method: GET
>```
>http://localhost:3000/api/building/all
>```
### Body (**raw**)

```json

```

### 🔑 Authentication apikey

|Param|value|Type|
|---|---|---|


### Response: 200
```json
{
    "apiStatus": true,
    "data": [
        {
            "_id": "63ad8c079482514d860dd790",
            "buildingNum": "5B",
            "noFloors": 2,
            "projectId": "63ad7f9c58a43708b2e4edf8",
            "units": [
                {
                    "unitName": "a",
                    "floorNo": 1,
                    "price": 1000,
                    "unitAddress": "5B-1-a",
                    "payment": "63adb9ed30d4b05a5c734396",
                    "status": "sold",
                    "_id": "63ad8c079482514d860dd791"
                },
                {
                    "unitName": "b",
                    "floorNo": 1,
                    "price": 1000,
                    "unitAddress": "5B-1-b",
                    "payment": "63ad9a36fd5476c2589d9a88",
                    "status": "sold",
                    "_id": "63ad8c079482514d860dd792"
                },
                {
                    "unitName": "c",
                    "floorNo": 1,
                    "price": 1000,
                    "unitAddress": "5B-1-c",
                    "payment": "63adde7146964bd64cb03f49",
                    "status": "sold",
                    "_id": "63ad8c079482514d860dd793"
                },
                {
                    "unitName": "d",
                    "floorNo": 1,
                    "price": 1000,
                    "unitAddress": "5B-1-d",
                    "payment": "",
                    "status": "free",
                    "_id": "63ad8c079482514d860dd794"
                },
                {
                    "unitName": "a",
                    "floorNo": 2,
                    "price": 1000,
                    "unitAddress": "5B-2-a",
                    "payment": "",
                    "status": "free",
                    "_id": "63ad8c079482514d860dd795"
                },
                {
                    "unitName": "b",
                    "floorNo": 2,
                    "price": 1000,
                    "unitAddress": "5B-2-b",
                    "payment": "",
                    "status": "free",
                    "_id": "63ad8c079482514d860dd796"
                },
                {
                    "unitName": "c",
                    "floorNo": 2,
                    "price": 1000,
                    "unitAddress": "5B-2-c",
                    "payment": "",
                    "status": "free",
                    "_id": "63ad8c079482514d860dd797"
                },
                {
                    "unitName": "d",
                    "floorNo": 2,
                    "price": 1000,
                    "unitAddress": "5B-2-d",
                    "payment": "",
                    "status": "free",
                    "_id": "63ad8c079482514d860dd798"
                }
            ],
            "createdAt": "2022-12-29T12:45:59.317Z",
            "updatedAt": "2022-12-29T18:37:38.955Z",
            "__v": 0
        },
        {
            "_id": "63afdab5e345a088f1abb77c",
            "buildingNum": "5B",
            "noFloors": 2,
            "projectId": "63afd7e5e345a088f1abb768",
            "units": [
                {
                    "unitName": "a",
                    "floorNo": 1,
                    "price": 1000,
                    "unitAddress": "5B-1-a",
                    "payment": "",
                    "status": "free",
                    "_id": "63afdab5e345a088f1abb77d"
                },
                {
                    "unitName": "b",
                    "floorNo": 1,
                    "price": 1000,
                    "unitAddress": "5B-1-b",
                    "payment": "",
                    "status": "free",
                    "_id": "63afdab5e345a088f1abb77e"
                },
                {
                    "unitName": "c",
                    "floorNo": 1,
                    "price": 1000,
                    "unitAddress": "5B-1-c",
                    "payment": "",
                    "status": "free",
                    "_id": "63afdab5e345a088f1abb77f"
                },
                {
                    "unitName": "d",
                    "floorNo": 1,
                    "price": 1000,
                    "unitAddress": "5B-1-d",
                    "payment": "",
                    "status": "free",
                    "_id": "63afdab5e345a088f1abb780"
                },
                {
                    "unitName": "a",
                    "floorNo": 2,
                    "price": 1000,
                    "unitAddress": "5B-2-a",
                    "payment": "",
                    "status": "free",
                    "_id": "63afdab5e345a088f1abb781"
                },
                {
                    "unitName": "b",
                    "floorNo": 2,
                    "price": 1000,
                    "unitAddress": "5B-2-b",
                    "payment": "",
                    "status": "free",
                    "_id": "63afdab5e345a088f1abb782"
                },
                {
                    "unitName": "c",
                    "floorNo": 2,
                    "price": 1000,
                    "unitAddress": "5B-2-c",
                    "payment": "",
                    "status": "free",
                    "_id": "63afdab5e345a088f1abb783"
                },
                {
                    "unitName": "d",
                    "floorNo": 2,
                    "price": 1000,
                    "unitAddress": "5B-2-d",
                    "payment": "",
                    "status": "free",
                    "_id": "63afdab5e345a088f1abb784"
                }
            ],
            "createdAt": "2022-12-31T06:46:13.549Z",
            "updatedAt": "2022-12-31T06:46:13.549Z",
            "__v": 0
        }
    ],
    "message": "all buildings"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get single building
### Method: GET
>```
>http://localhost:3000/api/building/single/{{buildingId}}
>```
### Body (**raw**)

```json

```

### 🔑 Authentication apikey

|Param|value|Type|
|---|---|---|


### Response: 200
```json
{
    "apiStatus": true,
    "data": {
        "_id": "63ad8c079482514d860dd790",
        "buildingNum": "5B",
        "noFloors": 2,
        "projectId": "63ad7f9c58a43708b2e4edf8",
        "units": [
            {
                "unitName": "a",
                "floorNo": 1,
                "price": 1000,
                "unitAddress": "5B-1-a",
                "payment": "63adb9ed30d4b05a5c734396",
                "status": "sold",
                "_id": "63ad8c079482514d860dd791"
            },
            {
                "unitName": "b",
                "floorNo": 1,
                "price": 1000,
                "unitAddress": "5B-1-b",
                "payment": "63ad9a36fd5476c2589d9a88",
                "status": "sold",
                "_id": "63ad8c079482514d860dd792"
            },
            {
                "unitName": "c",
                "floorNo": 1,
                "price": 1000,
                "unitAddress": "5B-1-c",
                "payment": "63adde7146964bd64cb03f49",
                "status": "sold",
                "_id": "63ad8c079482514d860dd793"
            },
            {
                "unitName": "d",
                "floorNo": 1,
                "price": 1000,
                "unitAddress": "5B-1-d",
                "payment": "",
                "status": "free",
                "_id": "63ad8c079482514d860dd794"
            },
            {
                "unitName": "a",
                "floorNo": 2,
                "price": 1000,
                "unitAddress": "5B-2-a",
                "payment": "",
                "status": "free",
                "_id": "63ad8c079482514d860dd795"
            },
            {
                "unitName": "b",
                "floorNo": 2,
                "price": 1000,
                "unitAddress": "5B-2-b",
                "payment": "",
                "status": "free",
                "_id": "63ad8c079482514d860dd796"
            },
            {
                "unitName": "c",
                "floorNo": 2,
                "price": 1000,
                "unitAddress": "5B-2-c",
                "payment": "",
                "status": "free",
                "_id": "63ad8c079482514d860dd797"
            },
            {
                "unitName": "d",
                "floorNo": 2,
                "price": 1000,
                "unitAddress": "5B-2-d",
                "payment": "",
                "status": "free",
                "_id": "63ad8c079482514d860dd798"
            }
        ],
        "createdAt": "2022-12-29T12:45:59.317Z",
        "updatedAt": "2022-12-29T18:37:38.955Z",
        "__v": 0
    },
    "message": "single project"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: update building
### Method: PUT
>```
>http://localhost:3000/api/building/update/{{buildingId}}
>```
### Body (**raw**)

```json
{
    "buildingNum":"2B",
    "noFloors":1
}
```

### 🔑 Authentication apikey

|Param|value|Type|
|---|---|---|


### Response: 200
```json
{
    "apiStatus": true,
    "data": {
        "_id": "63ad8c079482514d860dd790",
        "buildingNum": "2B",
        "noFloors": 1,
        "projectId": "63ad7f9c58a43708b2e4edf8",
        "units": [
            {
                "unitName": "a",
                "floorNo": 1,
                "price": 1000,
                "unitAddress": "2B-1-a",
                "payment": "",
                "status": "free",
                "_id": "63afdb5ae345a088f1abb7ad"
            },
            {
                "unitName": "b",
                "floorNo": 1,
                "price": 1000,
                "unitAddress": "2B-1-b",
                "payment": "",
                "status": "free",
                "_id": "63afdb5ae345a088f1abb7ae"
            },
            {
                "unitName": "c",
                "floorNo": 1,
                "price": 1000,
                "unitAddress": "2B-1-c",
                "payment": "",
                "status": "free",
                "_id": "63afdb5ae345a088f1abb7af"
            },
            {
                "unitName": "d",
                "floorNo": 1,
                "price": 1000,
                "unitAddress": "2B-1-d",
                "payment": "",
                "status": "free",
                "_id": "63afdb5ae345a088f1abb7b0"
            }
        ],
        "createdAt": "2022-12-29T12:45:59.317Z",
        "updatedAt": "2022-12-31T06:48:58.487Z",
        "__v": 0
    },
    "message": "building updated"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: delete building
### Method: DELETE
>```
>http://localhost:3000/api/building/delete/{{buildingId}}
>```
### Body (**raw**)

```json

```

### 🔑 Authentication apikey

|Param|value|Type|
|---|---|---|


### Response: 200
```json
{
    "apiStatus": true,
    "data": {
        "_id": "63ad8c079482514d860dd790",
        "buildingNum": "2B",
        "noFloors": 1,
        "projectId": "63ad7f9c58a43708b2e4edf8",
        "units": [
            {
                "unitName": "a",
                "floorNo": 1,
                "price": 1000,
                "unitAddress": "2B-1-a",
                "payment": "",
                "status": "free",
                "_id": "63afdb5ae345a088f1abb7ad"
            },
            {
                "unitName": "b",
                "floorNo": 1,
                "price": 1000,
                "unitAddress": "2B-1-b",
                "payment": "",
                "status": "free",
                "_id": "63afdb5ae345a088f1abb7ae"
            },
            {
                "unitName": "c",
                "floorNo": 1,
                "price": 1000,
                "unitAddress": "2B-1-c",
                "payment": "",
                "status": "free",
                "_id": "63afdb5ae345a088f1abb7af"
            },
            {
                "unitName": "d",
                "floorNo": 1,
                "price": 1000,
                "unitAddress": "2B-1-d",
                "payment": "",
                "status": "free",
                "_id": "63afdb5ae345a088f1abb7b0"
            }
        ],
        "createdAt": "2022-12-29T12:45:59.317Z",
        "updatedAt": "2022-12-31T06:48:58.487Z",
        "__v": 0
    },
    "message": "building deleted"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Units 


## End-point: get single unit
### Method: GET
>```
>{{base_url}}/api/building/{{buildingId}}/unit/?address=5B-1-b
>```
### Body (**raw**)

```json

```

### Query Params

|Param|value|
|---|---|
|address|5B-1-b|


### 🔑 Authentication apikey

|Param|value|Type|
|---|---|---|


### Response: 200
```json
{
    "apiStatus": true,
    "data": [
        {
            "unitName": "b",
            "floorNo": 1,
            "price": 1000,
            "unitAddress": "5B-1-b",
            "payment": "",
            "status": "free",
            "_id": "63afdab5e345a088f1abb77e"
        }
    ],
    "message": "Get Single Unit"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: update single unit
### Method: PUT
>```
>{{base_url}}/api/building/{{buildingId}}/unit/?address=5B-1-b
>```
### Body (**raw**)

```json
{
    "price":8000
}
```

### Query Params

|Param|value|
|---|---|
|address|5B-1-b|


### 🔑 Authentication apikey

|Param|value|Type|
|---|---|---|


### Response: 200
```json
{
    "apiStatus": true,
    "data": [
        {
            "unitName": "b",
            "floorNo": 1,
            "price": 8000,
            "unitAddress": "5B-1-b",
            "payment": "",
            "status": "free",
            "_id": "63afdab5e345a088f1abb77e"
        }
    ],
    "message": "update single unit"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: payment 


## End-point: sell single unit
### Method: POST
>```
>{{base_url}}/api/sell/{{buildingId}}/add/?address=5B-1-b
>```
### Body (**raw**)

```json
{
    "customer":"mahmoud Awwad",
    "employee":"danah",
    "paymentMthd":"quarter",
    "noOfYears":2
}
```

### Query Params

|Param|value|
|---|---|
|address|5B-1-b|


### 🔑 Authentication apikey

|Param|value|Type|
|---|---|---|


### Response: 200
```json
{
    "apiStatus": true,
    "data": {
        "payment": {
            "employee": "danah",
            "customer": "mahmoud Awwad",
            "paymentMthd": "quarter",
            "noOfYears": 2,
            "totalInvoices": 8,
            "noOfPaidInvoices": 1,
            "paidMoney": 1000,
            "invoicesNo": [
                3909260393
            ]
        },
        "_id": "63afe5cbe345a088f1abb815",
        "createdAt": "2022-12-31T07:33:31.059Z",
        "updatedAt": "2022-12-31T07:33:32.799Z",
        "__v": 0
    },
    "message": "Unit Sold succssfully"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Payment for single unit
### Method: GET
>```
>{{base_url}}/api/sell/payment/{{buildingId}}/?address=5B-1-b
>```
### Body (**raw**)

```json

```

### Query Params

|Param|value|
|---|---|
|address|5B-1-b|


### 🔑 Authentication apikey

|Param|value|Type|
|---|---|---|


### Response: 200
```json
{
    "apiStatus": true,
    "data": {
        "payment": {
            "employee": "danah",
            "customer": "mahmoud Awwad",
            "paymentMthd": "quarter",
            "noOfYears": 2,
            "totalInvoices": 8,
            "noOfPaidInvoices": 1,
            "paidMoney": 1000,
            "invoicesNo": [
                3909260393
            ]
        },
        "_id": "63afe5cbe345a088f1abb815",
        "createdAt": "2022-12-31T07:33:31.059Z",
        "updatedAt": "2022-12-31T07:33:32.799Z",
        "__v": 0
    },
    "message": "Got payment for selected Unit"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: pay new invoice for single unit
### Method: PUT
>```
>{{base_url}}/api/sell/payment/{{buildingId}}/?address=5B-1-c
>```
### Body (**raw**)

```json

```

### Query Params

|Param|value|
|---|---|
|address|5B-1-c|


### 🔑 Authentication apikey

|Param|value|Type|
|---|---|---|


### Response: 200
```json
{
    "apiStatus": true,
    "data": {
        "payment": {
            "employee": "danah",
            "customer": "mahmoud Awwad",
            "paymentMthd": "quarter",
            "noOfYears": 1,
            "totalInvoices": 4,
            "noOfPaidInvoices": 3,
            "paidMoney": 750,
            "invoicesNo": [
                5105775569,
                548722635,
                1270012010
            ]
        },
        "_id": "63afe57be345a088f1abb806",
        "createdAt": "2022-12-31T07:32:11.612Z",
        "updatedAt": "2022-12-31T07:38:35.025Z",
        "__v": 0
    },
    "message": "New Invoice Paid "
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Cancel selling for single unit
### Method: DELETE
>```
>{{base_url}}/api/sell/delete/{{buildingId}}/?address=5B-1-b
>```
### Body (**raw**)

```json

```

### Query Params

|Param|value|
|---|---|
|address|5B-1-b|


### 🔑 Authentication apikey

|Param|value|Type|
|---|---|---|


### Response: 200
```json
{
    "apiStatus": true,
    "data": {
        "payment": {
            "employee": "danah",
            "customer": "mahmoud Awwad",
            "paymentMthd": "quarter",
            "noOfYears": 2,
            "totalInvoices": 8,
            "noOfPaidInvoices": 1,
            "paidMoney": 1000,
            "invoicesNo": [
                3909260393
            ]
        },
        "_id": "63afe5cbe345a088f1abb815",
        "createdAt": "2022-12-31T07:33:31.059Z",
        "updatedAt": "2022-12-31T07:33:32.799Z",
        "__v": 0
    },
    "message": "Payment canceled "
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: download invoice
### Method: POST
>```
>{{base_url}}/api/sell/download/{{buildingId}}/?address=5B-1-b
>```
### Body (**raw**)

```json
{
    "invoice":8788787255
}
```

### Query Params

|Param|value|
|---|---|
|address|5B-1-b|


### 🔑 Authentication apikey

|Param|value|Type|
|---|---|---|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
