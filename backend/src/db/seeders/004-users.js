const utils = require('../../utils/utils1');

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../../config/sequelize.json')[env];


let sequelize;
// sequelize = new Sequelize(process.env[config.use_env_variable]);
sequelize = new Sequelize(config.database, config.username, config.password, config);
/*
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config,);
}
*/

const dougUserKey = utils.generateId();
const dancingSandsKey = utils.generateId();
const benUserKey = utils.generateId();
const nlwUserKey = utils.generateId();
const ilgUserKey = utils.generateId();
const paramountUserKey = utils.generateId();

const northGosfordStorageKingWarehouseKey = utils.generateId();


const dsVodkaKey = utils.generateId();
const ssDryGinKey = utils.generateId();
const ssBarrelKey = utils.generateId();
const ssSaffronKey = utils.generateId();
const ssChocolateKey = utils.generateId();

module.exports = {
  up(queryInterface, Sequelize) {

    return queryInterface.bulkInsert('users', [
      // Doug, as Admin
      {
        user_id: 1,
        user_key: dougUserKey,
        record_status_key: 'ACTIVE',
        created_at: new Date,
      },
      // Ben - business 
      {
        user_id: 2,
        user_key: benUserKey,
        record_status_key: 'ACTIVE',
        created_at: new Date,
      },
      // Dancing Sands - business
      {
        user_id: 3,
        user_key: dancingSandsKey,
        record_status_key: 'ACTIVE',
        created_at: new Date,
      },
      // nwl
      {
        user_id: 4,
        user_key: nlwUserKey,
        record_status_key: 'ACTIVE',
        created_at: new Date,
      },
      // paramount
      {
        user_id: 5,
        user_key: paramountUserKey,
        record_status_key: 'ACTIVE',
        created_at: new Date,
      },
      // ilg
      {
        user_id: 6,
        user_key: ilgUserKey,
        record_status_key: 'ACTIVE',
        created_at: new Date,
      },
    ]).then(() => {

            queryInterface.bulkInsert('warehouses', [
              {
                record_status_key: 'ACTIVE',
                created_at: new Date,
                warehouse_key: northGosfordStorageKingWarehouseKey, 
                warehouse_name: 'North Gosford Storage King',
                owner_user_key: dougUserKey
              }
            ]);

            queryInterface.bulkInsert('user_types_users', [
              {
                record_status_key: 'ACTIVE',
                created_at: new Date,
                user_key: dougUserKey,
                user_type_key: 'ADMIN'
              }
              , {
                record_status_key: 'ACTIVE',
                created_at: new Date,
                user_key: benUserKey,
                user_type_key: 'BUSINESS_PERSON'
              }
              , {
                record_status_key: 'ACTIVE',
                created_at: new Date,
                user_key: dancingSandsKey,
                user_type_key: 'SUPPLIER'
              }
              , {
                record_status_key: 'ACTIVE',
                created_at: new Date,
                user_key: nlwUserKey,
                user_type_key: 'DISTRIBUTOR'
              }
              , {
                record_status_key: 'ACTIVE',
                created_at: new Date,
                user_key: ilgUserKey,
                user_type_key: 'DISTRIBUTOR'
              }
              , {
                record_status_key: 'ACTIVE',
                created_at: new Date,
                user_key: paramountUserKey,
                user_type_key: 'DISTRIBUTOR'
              }
            ]);

            queryInterface.bulkInsert('users_child_users', [
              {
                record_status_key: 'ACTIVE',
                created_at: new Date,
                user_key: dancingSandsKey,
                child_user_key: benUserKey
              }
            ]);
      
            queryInterface.bulkInsert('user_names', [
              {
                record_status_key: 'ACTIVE',
                created_at: new Date,
                user_name_key: utils.generateId(),
                first_name: 'Doug',
                last_name: 'Boyd',
                company_name: '',
                user_key: dougUserKey,
                name_type_key: 'PERSONAL'
              }
              , {
                record_status_key: 'ACTIVE',
                created_at: new Date,
                user_name_key: utils.generateId(),
                first_name: 'Ben',
                last_name: 'Bonoma',
                company_name: '',
                user_key: benUserKey,
                name_type_key: 'PERSONAL'
              }
              , {
                record_status_key: 'ACTIVE',
                created_at: new Date,
                user_name_key: utils.generateId(),
                first_name: '',
                last_name: '',
                company_name: 'Dancing Sands Distillery',
                user_key: dancingSandsKey,
                name_type_key: 'COMPANY'
              }
              , {
                record_status_key: 'ACTIVE',
                created_at: new Date,
                user_name_key: utils.generateId(),
                first_name: '',
                last_name: '',
                company_name: 'Paramount/100Proof',
                user_key: paramountUserKey,
                name_type_key: 'COMPANY'
              }
              , {
                record_status_key: 'ACTIVE',
                created_at: new Date,
                user_name_key: utils.generateId(),
                first_name: '',
                last_name: '',
                company_name: 'Independent Liquor Group',
                user_key: ilgUserKey,
                name_type_key: 'COMPANY'
              }
              , {
                record_status_key: 'ACTIVE',
                created_at: new Date,
                user_name_key: utils.generateId(),
                first_name: '',
                last_name: '',
                company_name: 'Novocastrian Liquor Wholesalers',
                user_key: nlwUserKey,
                name_type_key: 'COMPANY'
              }
            ]);

      // Doug - home_address
      // Doug - personal_phone
      // Doug - personal_email
      // Doug - business_email
      // Ben - business_email
      // Ben - business_phone
      queryInterface.bulkInsert('contacts', [
        {
          record_status_key: 'ACTIVE',
          created_at: new Date,
          contact_key: utils.generateId(),
          contact_type_key: 'HOME_ADDRESS',
          user_key: dougUserKey,
          apartment_number: '',
          street_number: '6',
          street_name: 'Rubie Cresc',
          suburb: 'East Gosford',
          state: 'NSW',
          postcode: '2250',
          country: 'AUS',
          email_address: '',
          phone_number: ''
        },
        {
          record_status_key: 'ACTIVE',
          created_at: new Date,
          contact_key: utils.generateId(),
          contact_type_key: 'PERSONAL_PHONE',
          user_key: dougUserKey,
          apartment_number: '',
          street_number: '',
          street_name: '',
          suburb: '',
          postcode: '',
          state: '',
          country: '',
          email_address: '',
          phone_number: '+61 404 932 276'
        },
        {
          record_status_key: 'ACTIVE',
          created_at: new Date,
          contact_key: utils.generateId(),
          contact_type_key: 'PERSONAL_EMAIL',
          user_key: dougUserKey,
          apartment_number: '',
          street_number: '',
          street_name: '',
          suburb: '',
          postcode: '',
          state: '',
          country: '',
          email_address: 'doug@dougboyd.com.au',
          phone_number: ''
        },
        {
          record_status_key: 'ACTIVE',
          created_at: new Date,
          contact_key: utils.generateId(),
          contact_type_key: 'BUSINESS_EMAIL',
          user_key: dougUserKey,
          apartment_number: '',
          street_number: '',
          street_name: '',
          suburb: '',
          postcode: '',
          state: '',
          country: '',
          email_address: 'doug.boyd@runningmanspirits.com.au',
          phone_number: ''
        },
        {
          record_status_key: 'ACTIVE',
          created_at: new Date,
          contact_key: utils.generateId(),
          contact_type_key: 'BUSINESS_EMAIL',
          user_key: benUserKey,
          apartment_number: '',
          street_number: '',
          street_name: '',
          suburb: '',
          postcode: '',
          state: '',
          country: '',
          email_address: 'bonoma@dancingsands.com',
          phone_number: ''
        },
        {
          record_status_key: 'ACTIVE',
          created_at: new Date,
          contact_key: utils.generateId(),
          contact_type_key: 'BUSINESS_PHONE',
          user_key: benUserKey,
          apartment_number: '',
          street_number: '',
          street_name: '',
          suburb: '',
          postcode: '',
          state: '',
          country: '',
          email_address: '',
          phone_number: '+64 21 842 522'
        },
      ]);

      queryInterface.bulkInsert('products', [
        {
          record_status_key: 'ACTIVE',
          created_at: new Date,
          supplier_user_key: dancingSandsKey,
          product_key: dsVodkaKey,
          product_name: 'Dancing Sands Vodka',
          abv: 40
        },
        {
          record_status_key: 'ACTIVE',
          created_at: new Date,
          supplier_user_key: dancingSandsKey,
          product_key: ssDryGinKey,
          product_name: 'Sacred Spring Dry Gin',
          abv: 44
        },
        {
          record_status_key: 'ACTIVE',
          created_at: new Date,
          supplier_user_key: dancingSandsKey,
          product_key: ssBarrelKey,
          product_name: 'Sacred Spring Barrel Aged Gin',
          abv: 48
        },
        {
          record_status_key: 'ACTIVE',
          created_at: new Date,
          supplier_user_key: dancingSandsKey,
          product_key: ssChocolateKey,
          product_name: 'Sacred Spring Chocolate Gin',
          abv: 44
        },
        {
          record_status_key: 'ACTIVE',
          created_at: new Date,
          supplier_user_key: dancingSandsKey,
          product_key: ssSaffronKey,
          product_name: 'Sacred Spring Saffron Gin',
          abv: 46
        },
      ]);
      
      queryInterface.bulkInsert('distributors', [
        {
          record_status_key: 'ACTIVE',
          created_at: new Date,
          distributor_key: utils.generateId(),
          onload_warehouse_percentage_charge: 2,
          invoice_percentage_charge: 6,
          distributor_user_key: ilgUserKey
        },
        {
          record_status_key: 'ACTIVE',
          created_at: new Date,
          distributor_key: utils.generateId(),
          onload_warehouse_percentage_charge: 2,
          invoice_percentage_charge: 6,
          distributor_user_key: nlwUserKey
        },
        {
          record_status_key: 'ACTIVE',
          created_at: new Date,
          distributor_key: utils.generateId(),
          onload_warehouse_percentage_charge: 2,
          invoice_percentage_charge: 6,
          distributor_user_key: paramountUserKey
        },
      ]);

      queryInterface.bulkInsert('product_movement_types', [
        {
          record_status_key: 'ACTIVE',
          created_at: new Date,
          product_movement_type_key: 'PURCHASE_FROM_SUPPLIER',
          product_movement_type_name: 'Purchase From Supplier',
          allow_unbalanced: true,
        },
        {
          record_status_key: 'ACTIVE',
          created_at: new Date,
          product_movement_type_key: 'MOVE_TO_DISTRIBUTOR',
          product_movement_type_name: 'Transfered to Distributor',
          allow_unbalanced: false,
        },
        {
          record_status_key: 'ACTIVE',
          created_at: new Date,
          product_movement_type_key: 'USE_AS_SAMPLE',
          product_movement_type_name: 'Used as Sample Stock',
          allow_unbalanced: true,
        },
        {
          record_status_key: 'ACTIVE',
          created_at: new Date,
          product_movement_type_key: 'SALE_FROM_DISTRIBUTOR',
          product_movement_type_name: 'Sold from Distributor',
          allow_unbalanced: true,
        },
        {
          record_status_key: 'ACTIVE',
          created_at: new Date,
          product_movement_type_key: 'SALE',
          product_movement_type_name: 'Sold Direct',
          allow_unbalanced: true,
        },
      ]);

      sequelize.query("ALTER SEQUENCE users_user_id_seq RESTART WITH 7;").spread((results, metadata) => {

      });
    }
      );
  },
  down(queryInterface) {
    return queryInterface.bulkDelete('users', null, {});
  },
};
