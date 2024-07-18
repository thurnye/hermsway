const mongoose = require('mongoose');
const populateDefaultFields = require('./Scripts/populateDefaultFields')


// Production
mongoose.connect(process.env.DATABASE_URL)
.then(() => {
  populateDefaultFields()
  console.log("Database Connected..");
})
.catch(() => {
  console.log("Database Not Connected");
});



// Local Dev
// const db = mongoose.connect('mongodb://localhost/Hermsway',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// module.exports = db