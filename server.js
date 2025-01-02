const express = require('express');
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');

const app = express();
app.use(express.json()); // สำหรับรองรับ JSON ใน POST

// โหลดไฟล์ Swagger
const swaggerDocument = yaml.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Mock API
let users = [
  ];

// GET /users
app.get('/users', (req, res) => {
  res.json(users);
});

// // POST /users
// app.post('/users', (req, res) => {
//   const newUser = { id: users.length + 1, ...req.body };
//   console.log(req.body);
//   users.push(newUser);
//   res.status(201).json(newUser);
// });

// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
  console.log('Swagger UI is available at http://localhost:3000/api-docs');
});
