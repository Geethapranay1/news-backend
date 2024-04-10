exports.errorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    // Determine the appropriate HTTP status code based on the error
    let statusCode;
    if (err.name === 'ValidationError') {
      statusCode = 400; // Bad Request
    } else if (err.name === 'CastError') {
      statusCode = 404; // Not Found
    } else if (err.name === 'JsonWebTokenError') {
      statusCode = 401; // Unauthorized
    } else {
      statusCode = 500; // Internal Server Error
    }
  
    res.status(statusCode).json({
      error: {
        message: err.message,
        code: statusCode,
      },
    });
  };