var mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeConfigSchema = new Schema(
  {
    permissions: { type: Object, required: true },
    dashboards: { type: Object, required: true },
    portals: { type: Object, required: true },
    employeeId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('EmployeeConfigs', employeeConfigSchema);
