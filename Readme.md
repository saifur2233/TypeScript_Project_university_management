# Project Name: University Management

The University Management project aims to develop a robust and efficient backend server using TypeScript and Node.js for managing various aspects of a university. The system will provide a centralized platform for administrators, faculty members, and students to access and manage information related to courses, students, grades, timetables, and other
essential university-related data.

Backend Server: `https://university-management-system-server.vercel.app/`

### Modules

- User (Student, Faculty, Admin)
- Acamedic Faculties
- Academic Department
- Academic Semester
- Management Department

### RESTful API

Test Route: https://university-management-system-server.vercel.app/

### User

- https://university-management-system-server.vercel.app/api/v1/users/create-student (POST)
- https://university-management-system-server.vercel.app/api/v1/users/create-admin (POST)
- https://university-management-system-server.vercel.app/api/v1/users/create-faculty (POST)
- https://university-management-system-server.vercel.app/api/v1/auth/login (POST)
- https://university-management-system-server.vercel.app/api/v1/auth/change-password (POST)

### Student

- https://university-management-system-server.vercel.app/api/v1/students/220100002 (PATCH)
- https://university-management-system-server.vercel.app/api/v1/students/ (GET)
- https://university-management-system-server.vercel.app/api/v1/students/648bcdacd3fdbd4c4e47e272 (GET)

### Facuty

- https://university-management-system-server.vercel.app/api/v1/faculties (GET)
- https://university-management-system-server.vercel.app/api/v1/faculties/F-00002 (GET)

### Academic department

- https://university-management-system-server.vercel.app/api/v1/academic-departments/create-department (POST)
- https://university-management-system-server.vercel.app/api/v1/academic-departments (GET)

### Academic faculty

- https://university-management-system-server.vercel.app/api/v1/academic-faculties/create-faculty (POST)
- https://university-management-system-server.vercel.app/api/v1/academic-faculties/ (GET)
- https://university-management-system-server.vercel.app/api/v1/academic-faculties/64887253f7602515c67c17ac (GET)

### Academic semester

- https://university-management-system-server.vercel.app/api/v1/academic-semesters/create-semester (POST)
- https://university-management-system-server.vercel.app/api/v1/academic-semesters/?sortBy=year&sortOrder=desc (GET)
- https://university-management-system-server.vercel.app/api/v1/academic-semesters/?searchTerm=Autum&page=1&limit=2 (GET)
- https://university-management-system-server.vercel.app/api/v1/academic-semesters/648523717697fd24a4872929 (GET)
- https://university-management-system-server.vercel.app/api/v1/academic-semesters/648523717697fd24a4872929 (PATCH)
- https://university-management-system-server.vercel.app/api/v1/academic-semesters/64856d7fdc68d27352b00f7a (DELETE)

### Management department

- https://university-management-system-server.vercel.app/api/v1/management-departments/create-department (POST)
- https://university-management-system-server.vercel.app/api/v1/management-departments/ (GET)
- https://university-management-system-server.vercel.app/api/v1/management-departments/649283631620f826211196c7 (GET)
