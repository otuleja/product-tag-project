require('dotenv').config();

const Sequelize = require('sequelize');
let JAWSDB_URL = "mysql://i9xl1umxqy1o72l2:x6geolvnuoeg0i1y@ohunm00fjsjs1uzy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/z6vn1y8tcupsugnu"
JAWSDB_URL = null
const sequelize = JAWSDB_URL
  ? new Sequelize(JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
  });

module.exports = sequelize;
