import express from 'express';
import setUpConnection from './db/DataBaseUtils';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes/router';

const app = express();

setUpConnection();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({ origin: '*' }));

app.use('', router);

app.listen(3200, () => {
    console.log(`Server is up and running on port 3200`);
});
