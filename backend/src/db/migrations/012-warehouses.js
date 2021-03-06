module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('warehouses',
      {
        warehouse_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true, 
          primaryKey: true,
          unique: true,
          allowNull: false,
          comment: 'The incremental ID. This changes over time, while the key remains the same.',
        },
        warehouse_key: {
          type: Sequelize.STRING(50),
          unique: true,
          allowNull: false,
        },
        warehouse_name: {
          type: Sequelize.STRING(255),
          allowNull: false,
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
        owner_user_key: {
          type: Sequelize.STRING,
          allowNull: true,
          references: {
            model: 'users',
            key: 'user_key',
          },
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        },
      });
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('warehouses');
  },
};
