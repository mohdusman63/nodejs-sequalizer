'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            User.hasMany(models.Post, {
                foreignKey: "user_id",
                onDelete: "CASCADE"
            });
        }
    };
    User.init({
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};