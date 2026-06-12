import express from 'express';

const app = express();
const port = 3000;

const router = express.Router();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

router.get('/', (req, res) => {
    res.send('Cars endpoint');
});

router.post('/', (req, res) => {
    res.send('Create a new car');
});

router.put('/:id', (req, res) => {
    res.send(`Update car with id ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
    res.send(`Delete car with id ${req.params.id}`);
});

router.get('/:id', (req, res) => {
    res.send(`Get car with id ${req.params.id}`);
});

app.use('/api/v1/cars', router);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 
