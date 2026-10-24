# TechPath AI

**TechPath AI** is an AI-assisted learning and career guidance platform designed for software engineering and computer science students. It combines career assessment, personalized learning paths, skill tracking, roadmaps, quizzes, and administrative content management in one full-stack application.

The project began as **CareerMentor** and was later expanded into TechPath AI to focus more broadly on helping students identify suitable software career paths and develop the skills required for those paths.

> **Project Type:** Final Year Team Project  
> **Primary Focus:** Career guidance, personalized learning, skill development, and AI-assisted recommendations

---

## Overview

TechPath AI helps users move from career uncertainty to a structured learning path.

The platform allows users to:

- create and verify an account,
- complete a career assessment,
- receive AI-assisted software career recommendations,
- enroll in career domains,
- receive personalized module recommendations,
- track lessons and learning progress,
- take generated quizzes,
- view roadmaps and dashboard progress,
- explore career-related content and blogs,
- and manage learning content through an admin dashboard.

---

## Core Features

### Authentication & Account Management

- User registration and login
- Password hashing with `bcryptjs`
- JWT-based authentication
- Protected user and admin routes
- Email verification with OTP
- Resend verification flow
- Forgot-password and reset-password flow
- Role-based access for users and administrators

### AI Career Assessment

The assessment system collects user responses across multiple categories and uses AI to recommend suitable software-related career paths.

Current recommendation targets include areas such as:

- Frontend Development
- Backend Development
- Full-Stack Development
- Data Analysis
- Machine Learning
- Cloud Engineering
- DevOps
- UI/UX Design
- Game Development

Google Gemini is used to analyze assessment results and return structured career recommendations with short explanations.

### Personalized Skill Tracking

Users can enroll in career domains and progress through a structured learning hierarchy:

```text
Career Domain
    ↓
Modules
    ↓
Lessons
    ↓
Skill / Quiz Assessment
    ↓
Progress Tracking
```

The system stores user-specific module and lesson progress so each learner can follow an individualized path.

### AI-Assisted Module Selection

TechPath AI uses Gemini to select learning modules based on:

- selected career path,
- prior experience,
- confidence level,
- interests,
- and user responses.

The AI chooses modules from the available curriculum and returns them in a recommended learning order.

### AI-Generated Quizzes

Quiz questions can be generated from lesson content using Gemini.

The quiz-generation flow creates:

- multiple-choice questions,
- four options per question,
- lesson-focused questions,
- and additional higher-difficulty scenario-based questions.

### Roadmaps & Dashboard

Authenticated users can access:

- personalized roadmaps,
- enrolled career domains,
- current learning progress,
- module and lesson tracking,
- dashboard summaries,
- and recent learning activity.

### Blogs & Learning Content

The platform includes blog functionality for career and learning content.

Users can:

- browse blogs,
- view blog details,
- create their own blog content,
- and manage their personal posts.

### Admin Dashboard

Administrators have protected management routes for platform content.

Admin functionality includes:

- career-domain management,
- module management,
- lesson management,
- blog management interfaces,
- career explorer management interfaces,
- and skill-tracking content management.

Domain images and uploaded content can be stored using AWS S3.

### API Documentation

The backend includes Swagger/OpenAPI documentation.

When the backend is running locally, Swagger documentation is available at:

```text
http://localhost:5000/api-docs
```

---

## Tech Stack

### Frontend

- React 19
- Vite
- React Router
- TanStack React Query
- Axios
- Tailwind CSS
- Radix UI
- Framer Motion
- React Hook Form
- Lucide React

### Backend

- Node.js
- Express.js
- MySQL
- Sequelize ORM
- JWT
- bcryptjs
- Nodemailer
- Mailtrap
- Swagger / OpenAPI
- AWS S3
- Multer

### AI

- Google Gemini
- `@google/generative-ai`

AI is currently used for:

- career recommendations,
- personalized module selection,
- and quiz generation.

---

## Project Structure

```text
TechPath-AI/
├── Client/
│   ├── src/
│   │   ├── apis/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── constants/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── sections/
│   │   ├── services/
│   │   └── validations/
│   ├── package.json
│   └── vite.config.js
│
├── Server/
│   ├── config/
│   ├── controllers/
│   ├── email/
│   ├── helper/
│   ├── middleware/
│   ├── models/
│   ├── openai/
│   ├── routes/
│   ├── utils/
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

## Main Application Areas

### Public

- Home
- Career Explorer
- Blogs
- Events
- Login / Signup
- Email Verification
- Password Recovery

### User Dashboard

- Dashboard
- Career Assessment
- Skill Tracking
- Domain Tracking
- Lesson Tracking
- Skill Assessment
- Roadmaps
- Mentorship interface
- Achievements interface
- Settings
- User Blogs

### Admin Dashboard

- Admin Overview
- Blog Management
- Events Management interface
- Career Explorer Management
- Skill Tracking Management
- Domain Management
- Module Management
- Lesson Management

---

## How the AI Recommendation Flow Works

### Career Recommendation

```text
User completes assessment
        ↓
Assessment responses are stored
        ↓
Responses are grouped and scored
        ↓
Gemini receives structured user data
        ↓
AI returns recommended software careers
        ↓
Recommendations are displayed to the user
```

### Personalized Learning Modules

```text
User selects / enrolls in a career domain
        ↓
Available modules are retrieved
        ↓
User skill responses are collected
        ↓
Gemini evaluates experience and interests
        ↓
Recommended module IDs are returned
        ↓
Modules are assigned in learning order
```

### Quiz Generation

```text
Completed / selected lessons
        ↓
Lesson titles are sent to Gemini
        ↓
AI generates MCQs
        ↓
Quiz session is presented to the user
```

---

## Getting Started

### Prerequisites

Install the following before running the project:

- Node.js
- npm
- MySQL
- Git

You will also need credentials for any external services you want to use, such as:

- Google Gemini API
- email delivery
- AWS S3

---

## 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd TechPath-AI
```

---

## 2. Backend Setup

Navigate to the server:

```bash
cd Server
npm install
```

Create a `.env` file inside `Server/`.

Example:

```env
PORT=5000

CLIENT_URL=http://localhost:5173

MYSQL_DB_HOST=localhost
MYSQL_DB_NAME=your_database_name
MYSQL_DB_USER=your_database_user
MYSQL_DB_PASSWORD=your_database_password

JWT_SECRET=your_jwt_secret

OPENAI_API_KEY=your_gemini_api_key

EMAIL=your_email
EMAIL_PASSWORD=your_email_password
SENDER_EMAIL=your_sender_email
SENDER_NAME=TechPath AI

AWS_REGION=your_aws_region
AWS_BUCKET_NAME=your_bucket_name
AWS_ACCESS_KEY=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_access_key
```

> The current code uses `OPENAI_API_KEY` as the environment-variable name for the Gemini API key.

Start the backend:

```bash
npm start
```

The backend will run on:

```text
http://localhost:5000
```

Swagger documentation:

```text
http://localhost:5000/api-docs
```

---

## 3. Frontend Setup

Open another terminal:

```bash
cd Client
npm install
```

Create a `.env` file inside `Client/`:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend:

```bash
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

---

## Environment & Security Notes

Do not commit real environment variables or credentials.

Recommended `.gitignore` entries:

```gitignore
.env
.env.*
node_modules/
dist/
```

Before making the repository public, make sure that:

- database passwords are not printed to the console,
- API keys are not printed to the console,
- user passwords are never logged,
- `.env` files are not tracked,
- exposed credentials are rotated.

---

## Contributors

TechPath AI was developed as a collaborative Final Year Project at the Department of Computer Science, University of Karachi, under the supervision of **Dr. Farhan Ahmed Siddiqui**.

## Team Project

TechPath AI was developed as a university Final Year Project by a four-member team.

### Team Members

- **Abdul Rafay Siddiqui** — UI/UX Design, product planning, assessment/learning-flow design, and later AI integration/debugging
- **Abdul Wasay** — Team Lead / Backend Development
- **Rumaisa Naveed** — Frontend Development
- **Varisha Sarfaraz** — UI/UX Design

The project was developed collaboratively, with responsibilities divided across design, frontend development, backend development, system planning, testing, and documentation.

---

## Project Background

The project was originally developed under the name **CareerMentor**.

As the scope expanded beyond career selection into software-engineering learning paths, assessments, skill tracking, roadmaps, AI-assisted recommendations, quizzes, and progress tracking, the project was renamed **TechPath AI**.

---

## Future Improvements

Possible future improvements include:

- stronger AI recommendation validation,
- automated testing for backend services,
- improved quiz scoring and analytics,
- deeper gamification and achievement tracking,
- real-time mentorship features,
- expanded event-management APIs,
- deployment-ready environment configuration,
- improved logging and security hardening,
- CI/CD,
- and production monitoring.

---

## Project Purpose

TechPath AI was created as a Final Year Project and learning platform to explore full-stack development, software engineering education, AI-assisted personalization, relational database design, authentication, and content-management workflows.
