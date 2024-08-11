var mongoose = require('mongoose');
const {Schema} = mongoose;


const portalSchema = new Schema({
  portalName: { type: String, required: true },
  route: { type: String, required: true },
  ordinal: { type: Number, required: true },
  portalCode: { type: String, required: true },
  permissionTypeCode: { type: String, required: true },
},

{
  timestamps: true
});

module.exports = mongoose.model('Portals', portalSchema);