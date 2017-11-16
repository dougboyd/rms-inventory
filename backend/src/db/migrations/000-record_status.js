module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('record_status',
      {
        record_status_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true, 
          primaryKey: true,
          unique: true,
          allowNull: false,
          comment: 'The incremental ID. This changes over time, while the key remains the same.',
        },
        record_status_key: {
          type: Sequelize.STRING(255),
          unique: true,
          allowNull: false,
          comment: 'Unique Code'
        },
        record_status_name: {
          type: Sequelize.STRING(50),
          allowNull: false,
          comment: 'Status Name',
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        }
      });
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('record_status');
  },
};