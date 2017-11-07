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
		},
		claim: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		completed: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}
	}, {
    	timestamps: false
  	})

	Task.associate = function(models) {
		Task.belongsTo(models.Group, {
			foreignKey: {
				allowNull: false
			}
		})

		Task.belongsTo(models.User, {
			foreignKey: {
				allowNull: true
			}
		})
	};

	return Task;
};