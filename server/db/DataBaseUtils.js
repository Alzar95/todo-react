import mongoose from 'mongoose';
import config from '../../etc/config.json';

const setUpConnection = () => {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`,
        { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true }).then(() => {
        console.log('Database is connected!')
    });
};

export default setUpConnection;
