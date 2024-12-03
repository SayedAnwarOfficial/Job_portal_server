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

Configure environment variables (SECRET_KEY, CLOUDINARY_URL, etc.).
Start the server using npm start or nodemon.
Use a tool like Postman to interact with the endpoints.
>>>>>>> 46843c3d1ad04ae01f0dfcd0123f572cc022461c
