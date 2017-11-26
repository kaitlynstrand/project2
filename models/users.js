module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		first_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	}, {
    	timestamps: false
  	});


	User.associate = function(models) {
		User.belongsTo(models.Group, {
			foreignKey: {
				allowNull: false
			}
		});
		User.hasMany(models.Task, {
			onDelete: "cascade"
		});
	};

	return User;
};