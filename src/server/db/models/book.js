'use strict';

module.exports = (sequelize, DataTypes) => {
    var Book = sequelize.define('Book', {
        title: DataTypes.STRING,
        userId: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: (models) => {
                Book.belongsTo(models.User, {
                    foreignKey: 'userId',
                    onDelete: 'CASCADE'
                });
            }
        }
    });

    return Book;
};
