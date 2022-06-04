'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sneakers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      listedBy: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
      },
      rentedBy: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
      },
      name: {
        type: Sequelize.STRING
      },
      brand: {
        type: Sequelize.STRING
      },
      colorway: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      releaseDate: {
        type: Sequelize.DATE
      },
      size: {
        type: Sequelize.REAL
      },
      rate: {
        type: Sequelize.REAL
      },
      description: {
        type: Sequelize.TEXT
      },
      imageURL: {
        type: Sequelize.STRING
      },
      rented: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Sneakers');
  }
};
