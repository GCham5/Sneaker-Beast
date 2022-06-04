'use strict';
const nameJSON = require('./names.json');

module.exports = {
  async up (queryInterface, Sequelize) {

    let dummyNamesJSON = [];
    for (let i = 0; i < nameJSON.length; i++){
      dummyNamesJSON.push({
        firstName: nameJSON[i].firstName,
        lastName: nameJSON[i].lastName,
        email: nameJSON[i].email,
        password: 'test',
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    await queryInterface.bulkInsert('Users', dummyNamesJSON, {} )
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
