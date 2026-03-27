import express from 'express';

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('Github Actions Executed Successfully!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});