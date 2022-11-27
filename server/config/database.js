const mongoose = require('mongoose')

const connectionDB = async () => {
  mongoose.connect(process.env.MONGO_URI).then((result) => {
    console.log(`Aplication is running ${result.connection.host}`)
  }).catch((err) => console.log(`Occured an error => ${err}`)) 
}

module.exports = connectionDB