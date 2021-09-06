'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        static associate(models) {
            Post.belongsTo(models.User, {
                foreignKey: "user_id",
                onDelete: "CASCADE"
            });
        }
    };
    Post.init({
        user_id: DataTypes.INTEGER,
        message: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Post',
    });
    return Post;
};