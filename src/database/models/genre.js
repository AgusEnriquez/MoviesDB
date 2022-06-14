module.exports = (sequelize,DataTypes) => {
    const Genre = sequelize.define ("genre",{
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true, 
        },
        name: DataTypes.STRING(100),
        ranking: DataTypes.INTEGER(10),
        active: DataTypes.INTEGER(10),
    },
    {
        tableName:"genres",
        timestamps: false,
    });

    return Genre; 
}