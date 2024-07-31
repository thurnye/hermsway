var mongoose = require('mongoose');
const {Schema} = mongoose;


const companySchema = new Schema({
  companyName: { type: String, required: true },
  companyLogo: { type: String, },
  companyAddress: { type: String, required: true },
  companyPhoneNumber: { type: String, required: true },
  companyEmail: { type: String, required: true },
  companyId: { type: String, required: true },
  companyConfig: { type: Object},
},

{
  timestamps: true
});

module.exports = mongoose.model('Company', companySchema);