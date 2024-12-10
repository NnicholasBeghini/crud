const express = require('express');
const bodyParser = require('body-parser');
const customerRoutes = require('./routes/customerRoutes');
const app = express();

app.use(bodyParser.json());
app.use('/customers', customerRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
