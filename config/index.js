const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 9997,
        dbUrl: 'mongodb+srv://vankatavangelov:1qaz@WSX3edc@cluster0.xwxqk.mongodb.net/local_library?retryWrites=true&w=majority',
        cookie: 'x-auth-token',
        secret: 'SuperSecretSecret',
        saltRounds: 11
    }
};

module.exports = config[env];
