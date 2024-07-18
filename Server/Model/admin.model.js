var mongoose = require('mongoose');
const {Schema} = mongoose


const employeeSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String},
  googleId: String,
  roleId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Role',
  },
},
   
{
  timestamps: true
});

module.exports = mongoose.model('Admin', employeeSchema);