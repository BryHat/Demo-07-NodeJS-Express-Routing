const express = require('express');  

const PORT = 4000;  

const app = express();  
app.use(express.json());  

// Home Page  
app.get('/', (request, response) => {  
    response.send('<h1>API Homepage by Bryan R. DelaCruz</h1>')
});

// Customers  
const customerRouter = require('./routes/customer');  
app.use('/customers', customerRouter);  

// Orders  
const orderRouter = require('./routes/order');  
app.use('/orders', orderRouter);  

// Payments  
const paymentRouter = require('./routes/payment');  
app.use('/payments', paymentRouter);  

app.listen(PORT, () => {  
    console.log(`Server is running on port ${PORT}`);  
});

