const { DataTypes, Sequelize } = require("sequelize");
const { USER_TYPE } = require("../_helpers/constant");

module.exports = model;

function model(sequelize) {
  const attributes = {
    adminFirstName: { type: DataTypes.STRING, allowNull: true },
    adminLastName: { type: DataTypes.STRING, allowNull: true },

    adminEmail: { type: DataTypes.STRING, allowNull: false },
    adminPassword: { type: DataTypes.STRING, allowNull: false },

    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "admin",
    },

    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    deleted_at: { type: DataTypes.DATE, defaultValue: null },
  };

  const options = {
    // disable default timestamp fields (createdAt and updatedAt)
    timestamps: false,
  };

  return sequelize.define("admin", attributes, options);
}
