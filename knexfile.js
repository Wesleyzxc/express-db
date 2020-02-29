module.exports = {
  client: "mysql",
  connection: {
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
  }
};

// // local test
// module.exports = {
//   client: "mysql",
//   connection: {
//     host: "localhost",
//     database: "shop",
//     user: "root",
//     password: ""
//   }
// };
