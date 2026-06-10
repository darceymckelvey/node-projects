// const express = require('express'); // commonjs
import express from 'express';  // module
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/v1/cars', (req, res) => {
    res.send('Cars endpoint');
});

app.post('/api/v1/cars', (req, res) => {
    res.send('Create a new car');
});

app.put('/api/v1/cars/:id', (req, res) => {
    res.send(`Update car with id ${req.params.id}`);
});

app.delete('/api/v1/cars/:id', (req, res) => {
    res.send(`Delete car with id ${req.params.id}`);
});

app.get('/api/v1/cars/:id', (req, res) => {
    res.send(`Get car with id ${req.params.id}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
