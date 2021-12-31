var jwt = require('jsonwebtoken');

const JWT_secret = "iamironman";

const fetchData = (req,res,next) => {
    const token = req.header('auth-token');
    console.log(token);
    var decoded = jwt.verify(token, JWT_secret);
    if(!decoded){
        res.status(401).json({ error: "some internal error occured" });
    }
    req.UserData = decoded.User;
    next();
}


module.exports = fetchData;