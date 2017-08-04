'use strict';

module.exports = (sequelize, DataTypes) => {
    var Book = sequelize.define('Book', {
        title: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        return: DataTypes.BOOLEAN
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
