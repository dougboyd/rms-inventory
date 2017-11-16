const utils = require('../../utils/utils1');

module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert('user_types', [
      {
        user_type_key: 'STAFF',
        user_type_name: 'Staff Member',
        record_status_key: 'ACTIVE',
        created_at: new Date 
      }
      , {
        user_type_key: 'DISTRIBUTOR',
        user_type_name: 'Distributor',
        record_status_key: 'ACTIVE',
        created_at: new Date 
      }
      , {
        user_type_key: 'SUPPLIER',
        user_type_name: 'Supplier',
        record_status_key: 'ACTIVE',
        created_at: new Date 
      }
      , {
        user_type_key: 'BOTTLE_SHOP',
        user_type_name: 'Bottle Shop',
        record_status_key: 'ACTIVE',
        created_at: new Date 
      }
      , {
        user_type_key: 'VENUE',
        user_type_name: 'Venue',
        record_status_key: 'ACTIVE',
        created_at: new Date 
      }
      , {
        user_type_key: 'BUSINESS_PERSON',
        user_type_name: 'Business Person',
        record_status_key: 'ACTIVE',
        created_at: new Date 
      }
      , {
        user_type_key: 'ADMIN',
        user_type_name: 'Administrator',
        record_status_key: 'ACTIVE',
        created_at: new Date 
      }
    ], {});
  },

  down(queryInterface) {
    return queryInterface.bulkDelete('user_types', null, {});
  },
};