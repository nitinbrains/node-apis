const express = require('express');
const app = express();

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/test', (req, res) => {
    res.send([
        {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com'
        }
    ]);
});

