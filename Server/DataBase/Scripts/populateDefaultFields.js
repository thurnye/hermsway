const RoleModel = require('../../Model/roles.model');
const PortalModel = require('../../Model/portals.model');
const { defaultRoles, defaultPortals } = require('./customs/default.data');


const populateDefaultFields = async () => {

    //populate the Roles
    const roles = await RoleModel.countDocuments();
    if(roles === 0){
      const result = await RoleModel.insertMany(defaultRoles);
        console.log(`${result.insertedCount} records inserted successfully.`);
    }

    //populate the Roles
    const portals = await PortalModel.countDocuments();
    if(portals === 0){
      const result = await PortalModel.insertMany(defaultPortals);
        console.log(`${result.insertedCount} records inserted successfully.`);
    }
}


module.exports = populateDefaultFields;