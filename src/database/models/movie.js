module.exports = (sequelize,DataTypes) => {
    const Movie = sequelize.define ("movie",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        title:{
            type: DataTypes.STRING(500),
        },
        rating: DataTypes.DECIMAL,
        awards: DataTypes.INTEGER(10),
        release_date: DataTypes.DATE,
        length: DataTypes.INTEGER(10),
        genre_id: {
            type: DataTypes.INTEGER(10),
            foreignKey: true,
        }
    },
    {
        tableName:"movies",
        timestamps: false,
    });

    Movie.associate = function (models){
        Movie.belongsTo(models.genre, {
            foreignKey: "genre_id",
            as: "genre"
        });
    }

    return Movie;
}