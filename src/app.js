const express = require('express');
const cors = require('cors');
const router = require('./routes');
const config = require('./config');

const PORT = config.port;

// Express instance
const app = express();
// Allowing Cors
app.use(cors());
// To access request body we used express.json() middleware. It is available in Express v4.16.0 onwards.
app.use(express.json());
// To access url-encoded request body we used express.urlencoded()
app.use(express.urlencoded({ extended: true }));

// Set route in middleware
app.use(router);

// Error handlers

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

// Development error handler
// Will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (error, req, res, next) {
        res.status(error.status || 500);
        res.send({
            message: error.message,
            error: error
        });
    });
}

// Production error handler
// No stacktraces leaked to user
app.use(function (error, req, res, next) {
    res.status(error.status || 500);
    res.send({
        message: error.message,
        error: error
    });
});

app.listen(PORT, () => console.log(`Server is running on  http://localhost:${PORT}`));
