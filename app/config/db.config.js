module.exports = {
    HOST: "localhost",
    USER: "",
    PASSWORD: "",
    DB:"itemsdb",
    dialect: "mysql",
    pool: { //parâmetros relacionado ao SQL
        max: 5, //máximo de cinco conexões simultaneas que o banco poderá ter
        min: 0, //poderá não ter conexão nenhuma
        acquire: 30000, //tempo máximo de resposta
        idle: 10000 //a quantidade de tempo que a conexão poderá ficar ocioso
    }
};