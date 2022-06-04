'use strict';
const sneakerJSON = require('./dummy_sneakers.json');

module.exports = {
  async up (queryInterface, Sequelize) {
  
    let dummySneakersJSON = [];

    for (let i= 0; i < sneakerJSON.length; i++){
      dummySneakersJSON.push(
        {
          name: sneakerJSON[i].name,
          brand: sneakerJSON[i].brand,
          colorway: sneakerJSON[i].colorway,
          location: sneakerJSON[i].location,
          releaseDate: new Date(),
          size: sneakerJSON[i].size,
          rate: sneakerJSON[i].rate,
          imageURL: sneakerJSON[i].imageURL,
          rented: false,
          description: sneakerJSON[i].description,
          listedBy: sneakerJSON[i].listedBy,
          rentedBy: null,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      );
    }
    await queryInterface.bulkInsert('Sneakers', dummySneakersJSON, {});
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
    await queryInterface.bulkDelete('Sneakers', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
