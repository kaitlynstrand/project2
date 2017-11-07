module.exports = function(sequelize, DataTypes) {
	var Twilio= sequelize.define("User", {
		to: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: false,
		}
	});

	Twilio.associate = function(models) {
		Twilio.belongsTo(models.User, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	return Twilio;
};