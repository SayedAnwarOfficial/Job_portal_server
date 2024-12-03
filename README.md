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

# Company Management API

This API provides functionality for managing company data, including registration, retrieval, updating details, and more. It allows for handling company logos and associating companies with specific users.

---

## Table of Contents

1. [Features](#features)
2. [Schema: Company](#schema-company)
3. [Endpoints](#endpoints)
   - [Register Company](#register-company)
   - [Get All Companies](#get-all-companies)
   - [Get Company By ID](#get-company-by-id)
   - [Update Company](#update-company)
4. [Usage Instructions](#usage-instructions)

---

## Features

- Register new companies with a logo upload.
- Retrieve all companies registered by a logged-in user.
- Get details of a specific company by its ID.
- Update company details, including dynamic field updates and new logo uploads.

---

## Schema: Company

The `Company` schema represents the structure of a company document in the database.

### Fields

| Field         | Type     | Required | Description                       |
| ------------- | -------- | -------- | --------------------------------- |
| `name`        | String   | Yes      | Unique name of the company.       |
| `description` | String   | No       | Description of the company.       |
| `website`     | String   | No       | Website URL of the company.       |
| `location`    | String   | No       | Location of the company.          |
| `logo`        | String   | No       | URL to the company's logo.        |
| `userId`      | ObjectId | Yes      | Reference to the associated user. |

---

## Endpoints

### Register Company

- **URL:** `/company-register`
- **Method:** `POST`
- **Description:** Register a new company with details and logo.

#### Headers

- **Required:** Authentication token

#### Body

```json
{
  "companyName": "string",
  "description": "string",
  "website": "string",
  "location": "string"
}
```

# Job Management API

This API allows for the management of job postings, including creating new jobs, retrieving job listings, and fetching job details. It also supports admin-specific functionality for managing jobs they have created.

---

## Table of Contents
1. [Features](#features)
2. [Schema: Job](#schema-job)
3. [Endpoints](#endpoints)
   - [Post a Job](#post-a-job)
   - [Get All Jobs](#get-all-jobs)
   - [Get Job By ID](#get-job-by-id)
   - [Get Admin Jobs](#get-admin-jobs)
4. [Usage Instructions](#usage-instructions)

---

## Features
- **Admin Features**:
  - Create new job postings.
  - Retrieve jobs created by the admin.

- **General Features**:
  - Search and retrieve all job postings.
  - Fetch details of a specific job.

---

## Schema: Job

The `Job` schema represents the structure of a job document in the database.

### Fields
| Field            | Type         | Required | Description                                      |
|------------------|--------------|----------|--------------------------------------------------|
| `title`          | String       | Yes      | Title of the job.                               |
| `description`    | String       | Yes      | Description of the job.                         |
| `requirements`   | Array[String]| Yes      | List of requirements for the job.               |
| `salary`         | Number       | Yes      | Salary offered for the job.                     |
| `experienceLevel`| Number       | Yes      | Experience level required for the job.          |
| `location`       | String       | Yes      | Location of the job.                            |
| `jobType`        | String       | Yes      | Type of job (e.g., full-time, part-time).       |
| `position`       | Number       | Yes      | Number of positions available.                  |
| `company`        | ObjectId     | Yes      | Reference to the associated company.            |
| `created_by`     | ObjectId     | Yes      | Reference to the admin who created the job.     |
| `applications`   | Array[ObjectId]| No     | References to the job applications.             |

---

## Endpoints

### Post a Job
- **URL:** `/postjob`
- **Method:** `POST`
- **Description:** Admins can create a new job posting.

#### Headers
- **Required:** Authentication token

#### Body
```json
{
  "title": "string",
  "description": "string",
  "requirements": ["string", "string"],
  "salary": "number",
  "location": "string",
  "jobType": "string",
  "experienceLevel": "number",
  "position": "number",
  "companyId": "string"
}
