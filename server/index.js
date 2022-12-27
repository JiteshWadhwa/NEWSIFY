import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import { getNews } from './controller/news-controller.js';

//components
import Connection from './connection/db.js';
import Route from './routes/Route.js';
import DefaultData from './default.js'

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use('/',Route);
app.get('/', (req, res) => {res.send('Backend Server here')});
// app.get('/', (req, res) => res.redirect("/news") );
// app.get('/news', getNews);
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const PORT = process.env.PORT || 8000;

Connection(username, password);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

DefaultData();
