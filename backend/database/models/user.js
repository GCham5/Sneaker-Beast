'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Sneaker, {
        as: 'listedByUser',
        foreignKey: {
          name: 'listedBy',
          allowNull: false
        }
      });

      this.hasMany(models.Sneaker, {
        as: 'rentedByUser',
        foreignKey: {
          name: 'rentedBy'
        }
      });
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};