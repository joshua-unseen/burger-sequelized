module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {len: [1, 20]}
        },
        burgers_eaten: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    });
    Customer.associate = function(models) {
        Customer.hasMany(models.burger);
    };
    
    return Customer;
}