module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('product_movement_types',
      {
        product_movement_type_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true, 
          primaryKey: true,
          unique: true,
          allowNull: false,
          comment: 'The incremental ID. This changes over time, while the key remains the same.',
        },
        product_movement_type_key: {
          type: Sequelize.STRING(50),
          unique: true,
          allowNull: false,
        },
        product_movement_type_name: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        allow_unbalanced: {
          type: Sequelize.BOOLEAN,
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
      });
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('product_movement_types');
  },
};
