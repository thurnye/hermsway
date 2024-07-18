const RoleModel = require('../../Model/roles.model');
const { defaultRoles } = require('./customs/default.data');


const populateDefaultFields = async () => {

    //populate the questionsMatchPercentModel
    const roles = await RoleModel.countDocuments();
    if(roles === 0){
      const result = await RoleModel.insertMany(defaultRoles);
        console.log(`${result.insertedCount} records inserted successfully.`);
    }
}


module.exports = populateDefaultFields;