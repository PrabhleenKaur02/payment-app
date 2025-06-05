require('dotenv').config()

module.exports = {
    JWT_SECRET: process.env.JWT_SECRET,
    PORT: process.env.PORT,
    MONGO_URL: process.env.MONGO_URL
}

console.log("MONGO_URL:", process.env.MONGO_URL);

