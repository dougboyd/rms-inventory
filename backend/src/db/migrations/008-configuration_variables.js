module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('configuration_variables',
      {
        configuration_variable_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true, 
          primaryKey: true,
          unique: true,
          allowNull: false,
          comment: 'The incremental ID. This changes over time, while the key remains the same.',
        },
        configuration_variable_key: {
          type: Sequelize.STRING(50),
          unique: true,
          allowNull: false,
          comment: 'Active/Inactive for this record',
        },
        configuration_variable_name: {
          type: Sequelize.STRING(50),
          allowNull: false,
          comment: 'Active/Inactive for this record',
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
      });
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('configuration_variables');
  },
};
