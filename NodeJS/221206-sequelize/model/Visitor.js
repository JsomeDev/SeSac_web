//모델 정의


const Visitor = (Sequelize, DataTypes)=>{
    return Sequelize.define(
        "visitor", //CREATE TABLE visitor
        {
            id: { // id INT NOT NULL PRIMARY KEY AUTO_INCREMENT
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            name: { // name VARCHAR(10) NOT NULL
                type: DataTypes.STRING(10),
                allowNull: false
            },
            comment: { // comment MEDIUMTEXT 
                type: DataTypes.TEXT('medium')
            }
        },
        {
            tableName: "visitor", // SELECT * FROM visitor;
            freezeTableName: true,
            timestamps: false // default true createdAt updatedAt
            // collate, charset: "UTF8" 
        }
    );

}


module.exports = Visitor;

