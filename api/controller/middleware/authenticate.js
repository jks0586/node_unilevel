const jwt = require('jsonwebtoken');
const authenticateToken = function(req, res, next){
// export default  authenticateToken=(req, res, next)=>{
//   console.log(req.headers,'yyyy');
  const token = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, verifiedJwt) => {
    if(err){
        console.log('hhhhhhh');
        return res.sendStatus(401);
    //   return res.send(err.message)
    }else{
      res.send(verifiedJwt);
      next();
    }
  })

  
}

module.exports =  authenticateToken;