module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('user_types_users',
      {
        user_types_user_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true, 
          primaryKey: true,
          allowNull: false,
          comment: 'The incremental ID. This changes over time, while the key remains the same.',
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
        user_type_key: {
          type: Sequelize.STRING,
          allowNull: false,
          references: {
            model: 'user_types',
            key: 'user_type_key',
          },
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        },
      });
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('user_types_users');
  },
};
