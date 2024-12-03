<<<<<<< HEAD
# User Authentication and Profile Management API

This API handles user authentication and profile management for the application. It provides endpoints for user registration, login, logout, profile retrieval, and profile updates.

## Table of Contents

1. [Schema: User](#schema-user)
2. [Endpoints](#endpoints)
   - [Register](#register)
   - [Login](#login)
   - [Logout](#logout)
   - [Get Profile](#get-profile)
   - [Update Profile](#update-profile)
3. [Usage Instructions](#usage-instructions)

---

## Schema: User

The User schema represents the structure of user documents in the database.

### Fields

| Field                        | Type     | Required | Description                                  |
| ---------------------------- | -------- | -------- | -------------------------------------------- |
| `fullname`                   | String   | Yes      | Full name of the user.                       |
| `email`                      | String   | Yes      | Unique email address of the user.            |
| `phoneNumber`                | Number   | Yes      | Contact number of the user.                  |
| `password`                   | String   | Yes      | Hashed password of the user.                 |
| `role`                       | String   | Yes      | Role of the user (`student` or `recruiter`). |
| `profile.bio`                | String   | No       | User bio.                                    |
| `profile.skills`             | [String] | No       | List of user skills.                         |
| `profile.resume`             | String   | No       | URL to uploaded resume.                      |
| `profile.resumeOriginalName` | String   | No       | Original file name of resume.                |
| `profile.company`            | ObjectId | No       | Reference to a Company document.             |
| `profile.profilePhoto`       | String   | No       | URL to the user's profile photo.             |

---

## Endpoints

### Register

- **URL:** `/register`
- **Method:** `POST`
- **Description:** Registers a new user and uploads the profile photo.

#### Headers

None

#### Body

```json
{
  "fullname": "string",
  "email": "string",
  "phoneNumber": "number",
  "password": "string",
  "role": "string (student | recruiter)"
}
```
=======
This API handles user authentication and profile management for the application. It provides endpoints for user registration, login, logout, profile retrieval, and profile updates.

Table of Contents
Schema: User
Endpoints
Register
Login
Logout
Get Profile
Update Profile
Schema: User
The User schema represents the structure of user documents in the database.

Fields:
Field Type Required Description
fullname String Yes Full name of the user.
email String Yes Unique email address of the user.
phoneNumber Number Yes Contact number of the user.
password String Yes Hashed password of the user.
role String Yes Role of the user (student or recruiter).
profile.bio String No User bio.
profile.skills [String] No List of user skills.
profile.resume String No URL to uploaded resume.
profile.resumeOriginalName String No Original file name of resume.
profile.company ObjectId No Reference to a Company document.
profile.profilePhoto String No URL to the user's profile photo.
Endpoints

1. Register
   URL: /register
   Method: POST
   Description: Registers a new user and uploads the profile photo.
   Headers: None
   Body:

json
Copy code
{
"fullname": "string",
"email": "string",
"phoneNumber": "number",
"password": "string",
"role": "string (student | recruiter)"
}
File Uploads:

profilePhoto (required): Image file for the profile photo.
Responses:

Status Code Description
201 Account created successfully.
400 Validation error or email already exists.
500 Server error. 2. Login
URL: /login
Method: POST
Description: Authenticates a user and returns a session token.
Headers: None
Body:

json
Copy code
{
"email": "string",
"password": "string",
"role": "string (student | recruiter)"
}
Responses:

Status Code Description
200 Login successful, token set in cookie.
400 Validation error or incorrect credentials.
500 Server error. 3. Logout
URL: /logout
Method: GET
Description: Logs out the user by clearing the session token.
Headers: None
Body: None
Responses:

Status Code Description
200 Logout successful.
500 Server error. 4. Get Profile
URL: /profile
Method: GET
Description: Retrieves the authenticated user's profile.
Headers:

Authorization: Bearer token (required).
Body: None
Responses: | Status Code | Description | |-------------|-----------------------------------| | 200 | Profile fetched successfully. | | 404 | User not found. | | 500 | Server error. | 5. Update Profile
URL: /profile/update
Method: POST
Description: Updates the authenticated user's profile information and uploads files if provided.
Headers:

Authorization: Bearer token (required).
Body:
json
Copy code
{
"fullname": "string (optional)",
"email": "string (optional)",
"phoneNumber": "number (optional)",
"bio": "string (optional)",
"skills": "comma-separated string (optional)"
}
File Uploads:

resume (optional): File for the user's resume.
profilePhoto (optional): Image file for the profile photo.
Responses:

Status Code Description
200 Profile updated successfully.
404 User not found.
500 Server error.
Usage Instructions
Clone the repository and install dependencies.
Configure environment variables (SECRET_KEY, CLOUDINARY_URL, etc.).
Start the server using npm start or nodemon.
Use a tool like Postman to interact with the endpoints.
>>>>>>> 46843c3d1ad04ae01f0dfcd0123f572cc022461c
