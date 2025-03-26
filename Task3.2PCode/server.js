
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const corsOptions = {
    origin: '*', 
    methods: 'GET,PUT,POST,DELETE',
    allowedHeaders: 'Content-Type',
};

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
//api
app.get('/calculate', (req, res) => {
    const { num1, num2, operation } = req.query;
    const number1 = parseFloat(num1);
    const number2 = num2 ? parseFloat(num2) : null;

    if (isNaN(number1) || (num2 && isNaN(number2))) {
        return res.status(400).json({ error: 'Invalid number(s)' });
    }

    let result;
    switch (operation) {
        case 'add':
            result = number1 + number2;
            break;
        case 'subtract':
            result = number1 - number2;
            break;
        case 'multiply':
            result = number1 * number2;
            break;
        case 'divide':
            if (number2 === 0) {
                return res.status(400).json({ error: 'Cannot divide by zero' });
            }
            result = number1 / number2;
            break;
        case 'square':
            result = number1 * number1;
            break;
        default:
            return res.status(400).json({ error: 'Invalid operation' });
    }

    res.json({ num1: number1, num2: number2, operation, result });
});

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});
