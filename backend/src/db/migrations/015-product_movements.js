module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('product_movements',
      {
        product_movement_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true, 
          primaryKey: true,
          unique: true,
          allowNull: false,
          comment: 'The incremental ID. This changes over time, while the key remains the same.',
        },
        product_movement_key: {
          type: Sequelize.STRING(50),
          unique: true,
          allowNull: false,
        },
        distillery_cost_per_unit: {
          type: Sequelize.DECIMAL(15,2),
          unique: true,
          allowNull: false,
        },
        shipping_cost_total: {
          type: Sequelize.DECIMAL(15,2),
          unique: true,
          allowNull: false,
        },
        excise_cost_per_unit: {
          type: Sequelize.DECIMAL(15,2),
          unique: true,
          allowNull: false,
        },
        sale_price_per_unit: {
          type: Sequelize.DECIMAL(15,2),
          unique: true,
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
        product_movement_type_key: {
          type: Sequelize.STRING,
          allowNull: true,
          references: {
            model: 'product_movement_types',
            key: 'product_movement_type_key',
          },
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        },
        warehouse_key: {
          type: Sequelize.STRING,
          allowNull: true,
          references: {
            model: 'warehouses',
            key: 'warehouse_key',
          },
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        },
        distributor_user_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'users',
            key: 'user_id',
          },
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        },
        supplier_user_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'users',
            key: 'user_id',
          },
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        },
        product_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'products',
            key: 'product_id',
          },
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        },
      });
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('product_movements');
  },
};
