const utils = require('../../utils/utils1');

module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert('configuration_variables', [
      {
        configuration_variable_key: 'AUS_ALCOHOL_EXCISE_TAX',
        configuration_variable_name: 'Aus Excise',
        record_status_key: 'ACTIVE',
        created_at: new Date 
      },
    ], {});
  },

  down(queryInterface) {
    return queryInterface.bulkDelete('configuration_variables', null, {});
  },
};