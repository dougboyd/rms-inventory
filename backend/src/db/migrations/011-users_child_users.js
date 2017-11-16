module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('users_child_users',
      {
        user_child_user_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true, 
          primaryKey: true,
          unique: true,
          allowNull: false,
          comment: 'The incremental ID. This changes over time, while the key remains the same.',
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
        child_user_key: {
          type: Sequelize.STRING,
          allowNull: false,
          references: {
            model: 'users',
            key: 'user_key',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        record_status_key: {
          type: Sequelize.STRING(50),
          allowNull: false,
          comment: 'Active/Inactive for this record',
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        }
      });
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('users_child_users');
  },
};