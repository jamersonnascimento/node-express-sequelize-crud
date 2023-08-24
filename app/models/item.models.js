modules.exports = (sequelize, Sequelize) => {
    const ITEMS = sequelize.define("items", {
        nome: {
            type: Sequelize.STRING
        // string != STRING(classe, neste caso é o tipo)
        },
        description: {
            type: Sequelize.String
        },
        quantity: {
            type: Sequelize.INTEGER
        },
        is_flammable: {
            type: Sequelize.BOOLEAN
        }
    });
    return ITEMS;
}; 
        
    