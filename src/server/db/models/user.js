'use strict';

module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        username: DataTypes.STRING
    }, {
        classMethods: {
            associate: (models) => {
                User.hasMany(models.Book, {
                    foreignKey: 'userId',
                    as: 'books'
                });
            }
        }
    });

    return User;
};
