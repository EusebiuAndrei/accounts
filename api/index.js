const { Router } = require('express');

const app = Router();

// Import all the routers
const userRouter = require('./routes/userRouter');
const menuRouter = require('./routes/courseRouter');
const clientRouter = require('./routes/clientRoute');
const providerRouter = require('./routes/providerRouter');
const uploadRouter = require('./routes/uploadRouter');

// Add all the routers as middlewares
app.use('/users', userRouter);
app.use('/courses', menuRouter);
app.use('/clients', clientRouter);
app.use('/providers', providerRouter);
app.use('/upload', uploadRouter);

module.exports = app;
