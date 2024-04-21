// middleware/verifyTokenMiddleware.js
const jwt = require('jsonwebtoken');
const secret = 'asdfe45we45w345wegw345werjktjwertkj';

function verifyToken(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }
    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized: Invalid token' });
        }
        req.username = decoded.username;
        req.userId = decoded.id;
        next();
    });
}

module.exports = verifyToken;
