var mongoose = require('mongoose');
const { Schema } = mongoose;

const permissionTypeSchema = new Schema(
  {
    permissionType: { type: String, required: true },
    permissionTypeName: { type: String, required: true },
    permissionTypeCode: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('PermissionType', permissionTypeSchema);
