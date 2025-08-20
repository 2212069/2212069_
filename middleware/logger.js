// middleware/logger.js
function logger(req, res, next) {
  console.log(`${req.method} ${req.url} at ${new Date().toISOString()}`);
  next(); // very important -> move to next middleware/route
}

module.exports = logger;
