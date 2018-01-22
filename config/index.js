const config = {
    //hostname : "127.0.0.1",
    hostname : process.env.HOSTNAME || "0.0.0.0",
    port : process.env.PORT || 8080,
    db: {
        url: 'mongodb://admin:admin@ds263837.mlab.com:63837/twitnow'
    }
    
}

module.exports = config;