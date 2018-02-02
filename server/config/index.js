require('dotenv').config();

const config = {
    //hostname : "127.0.0.1",
    hostname : "0.0.0.0",
    port : process.env.PORT || 8080,
    db: {
        url: 'mongodb://admin:admin@ds263837.mlab.com:63837/twitnow'
    },
    /*cors:{
        origin: process.env.ORIGIN||'*',
        credentials : process.env.CREDENTIALS
    }*/
    cors:{
        origin: ["https://2f2344d38164467e82d3774a5ea451d6.vfs.cloud9.us-east-2.amazonaws.com","https://twitnowfe-andresau93.c9users.io"]||'*',
        credentials : process.env.CREDENTIALS
    }
}

module.exports = config;