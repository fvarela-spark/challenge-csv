const db = require('../../config/db.config')
const insert = require('../../middlewares/db')
const fs = require("fs");
const csv = require("fast-csv");
const CsvParser = require("json2csv").Parser;
const csv_config = require('../../config/csv.config')

const upload = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload a CSV file!");
    }

    let rows = [];
    let path = "./src/resources/static/assets/uploads/" + req.file.filename;


    fs.createReadStream(path)
      .pipe(csv.parse({ headers: true }))
      .on("error", (error) => {
        throw error.message;
      })
      .on("data", (row) => {

        for (let key in row) {
          if (!(key in csv_config)) {
            delete row[key]
          }
        }
        
        rows.push(row);
      })
      .on("end", () => {
          rows.forEach(row => insert(row))
          db.close()
          res.status(200).send({
            data: rows
          })
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};

module.exports = {
  upload
};
