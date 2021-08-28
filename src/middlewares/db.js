const db = require("../config/db.config");

function insert(row) {
    let UUID = row["UUID"]
    let VIN = row["VIN"]
    let Make = row["Make"]
    let Model = row["Model"]
    let Mileage = row["Mileage"]
    let Year = row["Year"]
    let Price = row["Price"]
    let ZipCodeID = row["ZipCode"]
    let CreateDate = row["CreateDate"]
    let UpdateDate = row["UpdateDate"]
    
    db.run('INSERT INTO csv(UUID, VIN, Make, Model, Mileage, Year, Price, ZipCode, CreateDate, UpdateDate) VALUES(?,?,?,?,?,?,?,?,?,?)', [UUID,VIN,Make,Model,Mileage,Year,Price,ZipCodeID,CreateDate,UpdateDate], (err) => {
        if(err) {
            return console.log(err.message); 
        }
    })
}

module.exports = insert