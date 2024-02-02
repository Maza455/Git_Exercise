module.exports = {
    port: process.env.PORT || 8098,
    db: {
        database: process.env.DB_NAME || "myDB",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASS || "*********",
        dialect: process.env.DIALECT || "mysql",
        host: process.env.HOST || "localhost",
        storage: "./sql_database.sql"
    },
    authentication: {
        ezmSecret : process.env.EZM_SECRET || 'secret'
    }
}