const { DataTypes, Sequelize } = require("sequelize");
const { USER_TYPE } = require("../_helpers/constant");

module.exports = model;

function model(sequelize) {
  const attributes = {
    customerFirstName: { type: DataTypes.STRING, allowNull: true },
    customerLastName: { type: DataTypes.STRING, allowNull: true },

    customerEmail: { type: DataTypes.STRING, allowNull: false },
    customerPassword: { type: DataTypes.STRING, allowNull: false },

    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "customer",
    },

    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    deleted_at: { type: DataTypes.DATE, defaultValue: null },
  };

  const options = {
    // disable default timestamp fields (createdAt and updatedAt)
    timestamps: false,
  };

  return sequelize.define("customer", attributes, options);
}