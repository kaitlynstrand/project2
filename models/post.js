module.exports = function(sequelize, DataTypes) {
	var Task = sequelize.define("Task", {
		description: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		date_due: {
			type: DataTypes.DATE,
			allowNull: false
		},
		points: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	})

	Task.associate = function(models) {
		Task.hasMany(models.User, {
			foreignKey: {
				allowNull: false
			}
		})
	};

	return Task;
};