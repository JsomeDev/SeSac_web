const User = (Sequelize, DataTypes)=> {
  return Sequelize.define(
    "userdata",
    {
      id: {
        type: DataTypes.STRING(20),
        allowNull: false,
        primaryKey: true,
      },
      pw: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull:false
      }
    },
    {
      tableName: "userdata",
      freezeTableName: true,
      timestamps: false
    }
  );
}

module.exports = User;
