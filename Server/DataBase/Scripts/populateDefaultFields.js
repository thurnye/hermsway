const RoleModel = require('../../Model/roles.model');
const PortalModel = require('../../Model/portals.model');
const SectionModel = require('../../Model/sections.model');
const WidgetModel = require('../../Model/widget.model');
const { defaultRoles, defaultPortals, defaultDashboardSections, defaultDashboardSectionWidgets} = require('./customs/default.data');


const populateDefaultFields = async () => {

    //populate the Roles
    const roles = await RoleModel.countDocuments();
    if(roles === 0){
      const result = await RoleModel.insertMany(defaultRoles);
        console.log(`${result.length} records inserted successfully.`);
    }

    //populate the Portals
    const portals = await PortalModel.countDocuments();
    if(portals === 0){
      const result = await PortalModel.insertMany(defaultPortals);
        console.log(`${result.length} records inserted successfully.`);
    }

    //populate the Sections
    const sections = await SectionModel.countDocuments();
    if(sections === 0){
      const result = await SectionModel.insertMany(defaultDashboardSections);
        console.log(`${result.length} records inserted successfully.`);
    }
    //populate the Widgets
    const widgets = await WidgetModel.countDocuments();
    if(widgets === 0){
      const result = await WidgetModel.insertMany(defaultDashboardSectionWidgets);
        console.log(`${result.length} records inserted successfully.`);
    }
}


module.exports = populateDefaultFields;