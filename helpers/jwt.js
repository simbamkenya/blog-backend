const { expressjwt: jwt } = require("express-jwt")
function authJwt(){
    const secret = process.env.secret;
    
    return jwt({
        secret,
        algorithms: ['HS256'],
        isRevoked: isRevoked
    })
}

async function isRevoked(){
    if(token.payload.isAdmin == false){
        return true;
    } 
    return false;
}

module.exports = authJwt;
