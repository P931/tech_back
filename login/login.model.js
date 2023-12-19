const { DataTypes, Sequelize } = require("sequelize");
const { USER_TYPE } = require("../_helpers/constant");

module.exports = model;

function model(sequelize) {
  const attributes = {

    userEmail: { type: DataTypes.STRING, allowNull: false },
    userPassword: { type: DataTypes.STRING, allowNull: false },

    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    deleted_at: { type: DataTypes.DATE, defaultValue: null },
  };

  const options = {
    // disable default timestamp fields (createdAt and updatedAt)
    timestamps: false,
  };

  return sequelize.define("User", attributes, options);
}