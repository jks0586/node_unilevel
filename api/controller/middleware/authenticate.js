const jwt = require('jsonwebtoken');

const authenticateToken = function(req, res, next){
  console.log(req,'yyyy');
 // const token = req.header['authorization'];
  const token = req.header('authorization');
//  const token = authHeader && authHeader.split(" ")[1];
  //if (token == null) return res.sendStatus(401);
  if (!token) return res.status(401).send('Access Denied !');
console.log(process.env.JWT_TOKEN_SECRET);
//console.log(token);
try 
{
    const verified = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
    req.user = verified;  
    next();
} 
catch (error) 
{
    res.status(400).send('Invalid token !');
}

  // jwt.verify(token, process.env.TOKEN_SECRET, (err, verifiedJwt) => {
  //   if(err){
  //       console.log('hhhhhhh');
  //      // return res.sendStatus();
  //   return res.send(err.message)
  //   }else{
  //     //req.token = verifiedJwt.token;
  //     res.send(verifiedJwt);
  //     next();
  //   }
  // })

   
}





module.exports =  authenticateToken;