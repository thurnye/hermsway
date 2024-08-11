var mongoose = require('mongoose');
const {Schema} = mongoose


const sectionSchema = new Schema({
  sectionName: { type: String, required: true },
  sectionCode: { type: String, required: true },
  // roleRefCode: { type: String, required: true },
  ordinal: { type: Number, required: true },
},
   
{
  timestamps: true
});

module.exports = mongoose.model('Section', sectionSchema);