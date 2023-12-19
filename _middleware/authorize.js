const jwt = require("express-jwt");
const { secret } = require("config.json");
const db = require("_helpers/db");
const { Op } = require("sequelize");

module.exports = authorize;

function authorize(roles = []) {
  // roles param can be a single role string (e.g. Role.User or 'User')
  // or an array of roles (e.g. [Role.Admin, Role.User] or ['Admin', 'User'])
  if (typeof roles === "string") {
    roles = [roles];
  }

  return [
    // authenticate JWT token and attach user to request object (req.user)

    jwt({ secret, algorithms: ["HS256"] }),

    // authorize based on user role
    async (req, res, next) => {
      debugger;
      // const account = await db.User.findByPk(req.user.id);
      const account = await db.User.findOne({
        where: {
          id: req.user.id,
          deleted_at: null,
          status: "active",
        },
      });

      if (!account || (roles.length && !roles.includes(account.type))) {
        // account no longer exists or role not authorized
        return res.status(401).json({ status: 401, message: "Unauthorized" });
      }

      // authentication and authorization successful
      req.user.role = account.type;
      // const refreshTokens = await account.getTokens();
      // req.user.ownsToken = (token) =>
      //   !!refreshTokens.find((x) => x.token === token);
      next();
    },
  ];
}
