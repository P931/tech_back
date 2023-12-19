const config = require("../config.json");
const mysql = require("mysql2/promise");
const { Sequelize } = require("sequelize");

module.exports = db = {};

initialize();

async function initialize() {
  // create db if it doesn't already exist

  const { host, port, user, password, database } = config.database_local;
  const connection = await mysql.createConnection({
    host,
    port,
    user,
    password,
  });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);


  // connect to db
  const sequelize = new Sequelize(database, user, password, {
    host: host,
    dialect: "mysql",
    logging: true,
  });

  // init models and add them to the exported db object
  db.Admin = require("../admin/admin.model")(sequelize);
  db.Customer = require("../customer/customer.model")(sequelize);
  db.User = require("../login/login.model")(sequelize);


  // define relationshipss
  db.User.belongsTo(db.Admin, { foreignKey: { name: "admin_id" } })


  db.Sequelize = sequelize;
  // sync all models with database
  await sequelize.sync();
}
