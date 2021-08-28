// module.exports = {
//   HOST: "localhost",
//   USER: "root",
//   PASSWORD: "123456",
//   DB: "testdb",
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

db.serialize(function() {
  db.run(`CREATE TABLE csv (
            UUID INTEGER,
            VIN TEXT,
            Make TEXT,
            Model TEXT,
            Mileage INTEGER,
            Year INTEGER,
            Price REAL,
            ZipCode INTEGER,
            CreateDate REAL,
            UpdateDate REAL
          )`);

});

db.serialize()

module.exports = db