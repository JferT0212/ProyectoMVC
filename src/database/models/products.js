module.exports= (sequelize, DataTypes) => {
    let alias= "Productos"
    let cols= {

        idProducto: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            notNull: false,
            primaryKey: true,
            unique: true,
        },
        nombreProducto: {
            type: DataTypes.STRING,
            notNull: false,

        },
        precio: {
            type: DataTypes.INTEGER,
        },

        detalle: {
            type: DataTypes.STRING,
            notNull: false,
        },
        imagen: {
            type: DataTypes.STRING,
            notNull: false,
            }
    }
    let config = {
        tableName: "productos",
        timestamps: false,
      };
        const Productos= sequelize.define(alias, cols, config)

        return Productos
};