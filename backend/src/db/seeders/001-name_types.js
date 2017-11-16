const utils = require('../../utils/utils1');

module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert('name_types', [
      {
        name_type_key: 'PERSONAL',
        name_type_name: 'Personal',
        record_status_key: 'ACTIVE',
        created_at: new Date 
      }
      ,{
        name_type_key: 'COMPANY',
        name_type_name: 'Company',
        record_status_key: 'ACTIVE',
        created_at: new Date 
      }
    ], {});
  },

  down(queryInterface) {
    return queryInterface.bulkDelete('name_types', null, {});
  },
};