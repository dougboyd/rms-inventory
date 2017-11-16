module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('user_names',
      {
        user_name_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true, 
          primaryKey: true,
          allowNull: false,
          comment: 'The incremental ID. This changes over time, while the key remains the same.',
        },
        user_name_key: {
          type: Sequelize.STRING(255),
          allowNull: false,
          comment: 'Unique Code'
        },
        first_name: {
          type: Sequelize.STRING(255),
          allowNull: false,
          comment: 'First Name of an individual'
        },
        last_name: {
          type: Sequelize.STRING(255),
          allowNull: false,
          comment: 'Last Name of an individual'
        },
        company_name: {
          type: Sequelize.STRING(255),
          allowNull: false,
          comment: 'Company Name of an entity'
        },
        record_status_key: {
          type: Sequelize.STRING(50),
          allowNull: false,
          comment: 'Active/Inactive for this record',
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
        name_type_key: {
          type: Sequelize.STRING,
          allowNull: false,
          references: {
            model: 'name_types',
            key: 'name_type_key',
          },
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        },
      });
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('user_names');
  },
};
