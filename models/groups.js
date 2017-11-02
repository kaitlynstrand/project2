module.exports = function(sequelize, DataTypes) {
	var Group = sequelize.define("Group", {
		group_name: {
			type: DataTypes.STRING,
			allowNull: false
		}
	});

	Group.associate = function(models) {

		Group.hasMany(models.Task, {
			onDelete: "cascade"
		});
	};

	return Group;
};