const Customer = require('../models/customerModel');

exports.createCustomer = (req, res) => {
    const customerData = req.body;
    Customer.create(customerData, (err, result) => {
        if (err) res.status(500).send(err);
        else res.status(201).send('Customer created successfully');
    });
};
