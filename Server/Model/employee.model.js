var mongoose = require('mongoose');
const {Schema} = mongoose


const employeeSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String},
  googleId: String,
  role: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Role',
  },
  // roles: { label: 'Managing Partner', value: 'managingPartner' },
  permissions: {
    type: Object
  },
  dashboards: {
    type: Object
  },
  portals: {
    type: Object
  },
  active: {
    type: Boolean,
    default: true
  }
},
   
{
  timestamps: true
});

module.exports = mongoose.model('Employee', employeeSchema);