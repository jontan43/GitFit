# GitFit

GitFit is a backend application built with NestJS and PostgreSQL. It provides APIs to manage users, workouts, gym bookings, and more, powering a full-stack fitness app.

---

## Features

- User authentication and management
- Workout and training plan handling
- Gym booking system
- PostgreSQL database integration via TypeORM
- Modular, scalable NestJS architecture

---

## Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (Recommended version: 18.x or above)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [PostgreSQL](https://www.postgresql.org/) (version 12 or above)
- [Git](https://git-scm.com/)

---

## Getting Started

### 1. Clone the repository

```
git clone https://github.com/jontan43/gitfit.git
cd gitfit
```

### 2. Install dependencies
```
npm install
```

### 3. Configure environment variables
Create a .env file in the project root with the following variables (adjust values as needed):
```
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=gym_admin
DATABASE_PASSWORD=your_password
DATABASE_NAME=gym_booking
```

### 4. Run database migrations / synchronize schema
If you use TypeORM synchronize (not recommended for production):

```
npm run start:dev
Or use migrations if configured.
```

### 5. Start the development server
```
npm run start:dev
The app should now be running at http://localhost:3000.
```

---

## Contributing
Feel free to open issues or submit pull requests. Please follow standard GitHub workflow:

1. Fork the repository
2. Create a feature branch (git checkout -b feature-name)
3. Commit your changes (git commit -m "Add feature")
4. Push to the branch (git push origin feature-name)
5. Open a Pull Request

---

## License
This project is licensed under the MIT License.
