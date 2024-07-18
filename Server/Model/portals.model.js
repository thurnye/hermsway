var mongoose = require('mongoose');
const {Schema} = mongoose;


const portalSchema = new Schema({
  portalName: { type: String, required: true },
  roleRefCode: { type: String, required: true },
  portalRoleName: { type: String, required: true },
  route: { type: String, required: true },
},
{
  timestamps: true
});

module.exports = mongoose.model('Portals', portalSchema);