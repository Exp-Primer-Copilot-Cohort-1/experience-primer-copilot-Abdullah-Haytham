// Create web server application

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Configure application
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const index = require('./routes/index');
const comments = require('./routes/comments');

// Use routes
app.use('/', index);
app.use('/comments', comments);

// Start server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});