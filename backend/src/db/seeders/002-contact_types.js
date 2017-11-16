const utils = require('../../utils/utils1');

module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert('contact_types', [
      {
        contact_type_key: 'HOME_ADDRESS',
        contact_type_name: 'Home Address',
        record_status_key: 'ACTIVE',
        created_at: new Date 
      }
      , {
        contact_type_key: 'BUSINESS_ADDRESS',
        contact_type_name: 'Business Address',
        record_status_key: 'ACTIVE',
        created_at: new Date 
      }
      , {
        contact_type_key: 'BUSINESS_PHONE',
        contact_type_name: 'Business Phone',
        record_status_key: 'ACTIVE',
        created_at: new Date 
      }
      , {
        contact_type_key: 'PERSONAL_PHONE',
        contact_type_name: 'Personal Phone',
        record_status_key: 'ACTIVE',
        created_at: new Date 
      }
      , {
        contact_type_key: 'BUSINESS_EMAIL',
        contact_type_name: 'Business Email',
        record_status_key: 'ACTIVE',
        created_at: new Date 
      }
      , {
        contact_type_key: 'PERSONAL_EMAIL',
        contact_type_name: 'Personal Email',
        record_status_key: 'ACTIVE',
        created_at: new Date 
      }
    ], {});
  },

  down(queryInterface) {
    return queryInterface.bulkDelete('contact_types', null, {});
  },
};