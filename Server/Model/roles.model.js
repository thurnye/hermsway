var mongoose = require('mongoose');
const {Schema} = mongoose


const roleSchema = new Schema({
  roleName: { type: String, required: true },
  refCode: { type: String, required: true },
},
   
{
  timestamps: true
});

module.exports = mongoose.model('Role', roleSchema);