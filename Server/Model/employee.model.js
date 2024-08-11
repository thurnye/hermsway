var mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    roleRefCode: { type: String, required: true },
    permissions: {
      type: Object,
    },
    dashboards: {
      type: Object,
    },
    portals: {
      type: Object,
    },
    active: {
      type: Boolean,
      default: true,
    },
    companyId: { type: String, required: true },
    employeeId: { type: String, required: true },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Employee', employeeSchema);
