module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('configurations',
      {
        configuration_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true, 
          primaryKey: true,
          allowNull: false,
          comment: 'The incremental ID. This changes over time, while the key remains the same.',
        },
        configuration_key: {
          type: Sequelize.STRING(50),
          allowNull: false,
          comment: 'Active/Inactive for this record',
        },
        configuration_value: {
          type: Sequelize.STRING(50),
          allowNull: false,
          comment: 'The Value of the Configuration Variable',
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
        configuration_variable_key: {
          type: Sequelize.STRING,
          allowNull: false,
          references: {
            model: 'configuration_variables',
            key: 'configuration_variable_key',
          },
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        },
      });
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('configurations');
  },
};
