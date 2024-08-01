const RoleModel = require('../../Model/roles.model');
const PortalModel = require('../../Model/portals.model');
const SectionModel = require('../../Model/sections.model');
const WidgetModel = require('../../Model/widget.model');
const CompanyModel = require('../../Model/company.model');
const PermissionTypesModel = require('../../Model/permissionTypes.model');
const PermissionsModel = require('../../Model/permissions.model');
const {companyProfile, defaultRoles, defaultPortals, defaultDashboardSections, defaultDashboardSectionWidgets} = require('./customs/default.data');
const {defaultPermissionTypes, permissions} = require('./customs/defaultPermissions.data')


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
    // Default company - delete from production
    //populate the company
    const companies = await CompanyModel.countDocuments();
    if(companies === 0){
      const result = await CompanyModel.insertMany(companyProfile);
        console.log(`${result.length} records inserted successfully.`);
    }

    //populate the permission Types
    const permissionTypes = await PermissionTypesModel.countDocuments();
    if(permissionTypes === 0){
      const result = await PermissionTypesModel.insertMany(defaultPermissionTypes);
        console.log(`${result.length} records inserted successfully.`);
    }


    //populate the permissions
    const allPermissions = await PermissionsModel.countDocuments();
    if(allPermissions === 0){
      const result = await PermissionsModel.insertMany(permissions);
        console.log(`${result.length} records inserted successfully.`);
    }

}


module.exports = populateDefaultFields;