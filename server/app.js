import express from 'express';
//! import http from 'http';
import axios from 'axios';
import cors from 'cors';
// eslint-disable-next-line import/extensions
import dogToken from './config.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const options = {
    headers: {
        'x-api-key': `${dogToken}`,
    },
};
const port = '8080';

app.get('/breeds', (req, res) => {
    axios
        .get('https://api.thedogapi.com/v1/breeds', options)
        .then((results) => res.status(200).send(results.data))
        .catch((err) => console.log(err));
});

app.listen(port);
console.log(`Listening att http://localhost:${port}`);
