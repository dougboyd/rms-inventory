module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('distributors',
      {
        distributor_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true, 
          primaryKey: true,
          unique: true,
          allowNull: false,
          comment: 'The incremental ID. This changes over time, while the key remains the same.',
        },
        distributor_key: {
          type: Sequelize.STRING(50),
          unique: true,
          allowNull: false,
        },
        onload_warehouse_percentage_charge: {
          type: Sequelize.DECIMAL(5,2),
          allowNull: false,
        },
        invoice_percentage_charge: {
          type: Sequelize.DECIMAL(5,2),
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
        distributor_user_key: {
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
    return queryInterface.dropTable('distributors');
  },
};
