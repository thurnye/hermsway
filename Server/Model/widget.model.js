var mongoose = require('mongoose');
const {Schema} = mongoose


const widgetSchema = new Schema({
  widgetName: { type: String, required: true },
  widgetComponentName: { type: String, required: true },
  sectionWidgetName: { type: String, required: true },
  sectionCode: { type: String, required: true },
  widgetDimension: { type: String, required: true },
  ordinal: { type: Number, required: true },
},
   
{
  timestamps: true
});

module.exports = mongoose.model('Widget', widgetSchema);