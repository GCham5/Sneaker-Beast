'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sneaker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        as: 'listedByUser',
        foreignKey: {
          name: 'listedBy',
          allowNull: false
        }
      });

      this.belongsTo(models.User, {
        as: 'rentedByUser',
        foreignKey: {
          name: 'rentedBy',
          allowNull: true
        }
      });

    }
  }
  Sneaker.init({
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    colorway: DataTypes.STRING,
    location: DataTypes.STRING,
    releaseDate: DataTypes.DATE,
    size: DataTypes.REAL,
    rate: DataTypes.REAL,
    description: DataTypes.STRING,
    listedBy: DataTypes.INTEGER,
    rentedBy: DataTypes.INTEGER,
    imageURL: DataTypes.STRING,
    rented: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Sneaker',
  });
  return Sneaker;
};