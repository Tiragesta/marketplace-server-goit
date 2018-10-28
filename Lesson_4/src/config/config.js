const dbUser = "admin";
const dbPassword = "qwe123";

const config = {
  port: 8080,
  dbUser,
  dbPassword,
  dbUrl: `mongodb://${dbUser}:${dbPassword}@ds159953.mlab.com:59953/my_api`
};

module.exports = config;
