var mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeConfigSchema = new Schema(
  {
    permissions: { type: Object, required: true },
    dashboards: { type: Object, required: true },
    portals: { type: Object, required: true },
    employee: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Employee',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('EmployeeConfigs', employeeConfigSchema);
