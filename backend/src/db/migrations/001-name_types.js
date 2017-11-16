module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('name_types',
      {
        name_type_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true, 
          primaryKey: true,
          unique: true,
          allowNull: false,
          comment: 'The incremental ID. This changes over time, while the key remains the same.',
        },
        name_type_key: {
          type: Sequelize.STRING(255),
          unique: true,
          allowNull: false,
          comment: 'Unique Code'
        },
        name_type_name: {
          type: Sequelize.STRING(50),
          allowNull: false,
          comment: 'Name',
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
    return queryInterface.dropTable('name_types');
  },
};