'use strict';

module.exports = (sequelize, DataTypes) => {
    var Inventory = sequelize.define('Inventory', {
        title: DataTypes.STRING,
        bookId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER,
        return: DataTypes.BOOLEAN
    }, {
        classMethods: {
            associate: (models) => {
                // associations can be defined here
            }
        }
    });
    return Inventory;
};
