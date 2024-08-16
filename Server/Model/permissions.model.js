var mongoose = require('mongoose');
const { Schema } = mongoose;

const permissionSchema = new Schema(
  {
    permissionName: { type: String, required: true },
    permissionComponent: { type: String, required: true },
    subCategory: { type: String},
    permissionCode: { type: String, required: true },
    permissionTypeCode: { type: String, required: true },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Permission', permissionSchema);
