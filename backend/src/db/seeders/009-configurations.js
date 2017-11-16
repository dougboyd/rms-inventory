const utils = require('../../utils/utils1');

module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert('configurations', [
      {
        configuration_key: utils.generateId(),
        configuration_value: '82.76',
        record_status_key: 'ACTIVE',
        configuration_variable_key: 'AUS_ALCOHOL_EXCISE_TAX',
        created_at: new Date 
      },
    ], {});
  },

  down(queryInterface) {
    return queryInterface.bulkDelete('configurations', null, {});
  },
};