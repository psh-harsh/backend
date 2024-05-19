const express = require('express');
const helmet = require('helmet');

const officeRoutes = require('./src/office/routes.js');
const HodRoutes = require('./src/HOD/hodRoutes.js');
const teacherRoutes = require('./src/Teacher/teacherRoutes.js');
const studentRoutes = require('./src/Student/studentRoutes.js');

const app = express();

const port = 3000;

app.use(helmet()); // Use helmet for security
app.use(express.json());

// Sample API keys
const apiKeys = ['PSH', 'PSHG', 'gyjh'];

// Middleware for API key authentication
const apiKeyAuth = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];

  if (!apiKey || !apiKeys.includes(apiKey)) {
    return res.status(401).json({ error: 'Invalid API key' });
  }

  next();
};

// Mounting API key authentication middleware
app.use(apiKeyAuth);

// Mounting API key authentication middleware
app.use(apiKeyAuth);

app.get('/', (req, res) => {
  res.send('Hello Ves College');
});

// Mounting officeRoutes
app.use('/api/v1/office', officeRoutes);
app.use('/api/v1/hod', HodRoutes);
app.use('/api/v1/teacher', teacherRoutes);
app.use('/api/v1/student', studentRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
