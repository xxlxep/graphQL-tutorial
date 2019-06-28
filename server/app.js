const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('../schema/schema');
const mongoose = require('mongoose');

const app = express();
const PORT = 3005;

mongoose.connect(
  'mongodb+srv://xxlxep:5zQ5GZ44ZwDiiFf@cluster0-926xc.mongodb.net/test?retryWrites=true&w=majority',
  { useMongoClient: true }
);
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
const dbConnection = mongoose.connection;
dbConnection.on('error', err => console.log(`Connection error: ${err}`));
dbConnection.once('open', () => console.log('Connected to db'));
app.listen(PORT, err => {
  err ? console.log(error) : console.log('Server started');
});
