const db = require('./config/database');

const Customer = {
    create: (customerData, callback) => {
        const query = 'INSERT INTO customers (name, cpf, address, phone) VALUES (?, ?, ?, ?)';
        db.query(query, [customerData.name, customerData.cpf, customerData.address, customerData.phone], callback);
    },
    // Outros métodos (update, delete, get) podem ser adicionados aqui
};

module.exports = Customer;
