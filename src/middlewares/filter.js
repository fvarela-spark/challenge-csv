let filter = (req, res, next) => {
    if (req.file == undefined) {
        return res.status(400).send("Please upload a CSV file!");
    }
    if (req.body.providerName == undefined) {
        return res.status(400).send("Please define a provider's name")
    }
    next()
  }

module.exports = filter