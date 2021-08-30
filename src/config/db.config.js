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