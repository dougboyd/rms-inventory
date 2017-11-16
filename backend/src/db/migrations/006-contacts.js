module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('contacts',
      {
        contact_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true, 
          primaryKey: true,
          allowNull: false,
          comment: 'The incremental ID. This changes over time, while the key remains the same.',
        },
        contact_key: {
          type: Sequelize.STRING(255),
          allowNull: false,
          comment: 'Unique Code'
        },
        record_status_key: {
          type: Sequelize.STRING(50),
          allowNull: false,
          comment: 'Active/Inactive for this record',
        },
        apartment_number: {
          type: Sequelize.STRING(255),
          allowNull: false,
          comment: 'Apartment Number',
        },
        street_number: {
          type: Sequelize.STRING(255),
          allowNull: false,
          comment: 'Street Number',
        },
        street_name: {
          type: Sequelize.STRING(255),
          allowNull: false,
          comment: 'Street Name',
        },
        suburb: {
          type: Sequelize.STRING(255),
          allowNull: false,
          comment: 'Suburb',
        },
        postcode: {
          type: Sequelize.STRING(255),
          allowNull: false,
          comment: 'Postcode',
        },
        state: {
          type: Sequelize.STRING(255),
          allowNull: false,
          comment: 'Postcode',
        },
        country: {
          type: Sequelize.STRING(255),
          allowNull: false,
          comment: 'Country',
        },
        email_address: {
          type: Sequelize.STRING(255),
          allowNull: false,
          comment: 'Email',
        },
        phone_number: {
          type: Sequelize.STRING(255),
          allowNull: false,
          comment: 'Phone Number',
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        user_key: {
          type: Sequelize.STRING,
          allowNull: false,
          references: {
            model: 'users',
            key: 'user_key',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        contact_type_key: {
          type: Sequelize.STRING,
          allowNull: false,
          references: {
            model: 'contact_types',
            key: 'contact_type_key',
          },
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        },
      });
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('contacts');
  },
};
