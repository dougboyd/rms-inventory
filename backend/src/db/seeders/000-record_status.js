const utils = require('../../utils/utils1');

module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert('record_status', [
      {
        record_status_key: 'ACTIVE',
        record_status_name: 'Active',
        created_at: new Date 
      },
      {
        record_status_key: 'INACTIVE',
        record_status_name: 'Inactive',
        created_at: new Date 
      }
    ], {});
  },

  down(queryInterface) {
    return queryInterface.bulkDelete('record_status', null, {});
  },
};